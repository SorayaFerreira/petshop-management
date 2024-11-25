-- CreateTable
CREATE TABLE "Client" (
    "cpf" VARCHAR(11) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "age" INTEGER,
    "id_client" VARCHAR(11) NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "price" DECIMAL(9,2) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AppointmentService" (
    "id" SERIAL NOT NULL,
    "id_appointment" INTEGER NOT NULL,
    "id_service" INTEGER NOT NULL,

    CONSTRAINT "AppointmentService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "dateAndTime" TIMESTAMP(3) NOT NULL,
    "id_pet" INTEGER NOT NULL,
    "id_employee" VARCHAR(11) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "cpf" VARCHAR(11) NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("cpf")
);

--CreateTable
CREATE TABLE "Appointment_Log" (
    "log_id" SERIAL PRIMARY KEY,        
    "operation" TEXT NOT NULL,  
    "log_time" TIMESTAMP DEFAULT NOW(),        
    "id_appointment" INTEGER NOT NULL,              
    "old_ap_date" TIMESTAMP,
    "current_ap_date" TIMESTAMP,            
    "id_pet" INTEGER,                   
    "id_employee" VARCHAR(11)
);             
        

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Service_type_key" ON "Service"("type");

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Client"("cpf") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentService" ADD CONSTRAINT "AppointmentService_id_appointment_fkey" FOREIGN KEY ("id_appointment") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentService" ADD CONSTRAINT "AppointmentService_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_id_pet_fkey" FOREIGN KEY ("id_pet") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_id_employee_fkey" FOREIGN KEY ("id_employee") REFERENCES "Employee"("cpf") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE OR REPLACE FUNCTION log_table() RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'UPDATE') THEN
    INSERT INTO "Appointment_Log"("operation","log_time", "id_appointment", "old_ap_date", "current_ap_date", "id_pet", "id_employee")

    VALUES (TG_OP, NOW(), OLD."id", OLD."dateAndTime", NEW."dateAndTime", OLD."id_pet", OLD."id_employee");

  ELSIF (TG_OP = 'DELETE') THEN
    INSERT INTO "Appointment_Log"("operation","log_time", "id_appointment", "old_ap_date", "current_ap_date", "id_pet", "id_employee")

    VALUES (TG_OP, NOW(), OLD."id", OLD."dateAndTime", NEW."dateAndTime", OLD."id_pet", OLD."id_employee");

  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_log_appointment
AFTER UPDATE OR DELETE ON "Appointment"
FOR EACH ROW
EXECUTE FUNCTION log_table();
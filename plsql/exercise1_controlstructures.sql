CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE
);

INSERT INTO Customers VALUES
(1,'Ram',65,15000,'FALSE');

INSERT INTO Customers VALUES
(2,'Shyam',45,5000,'FALSE');

INSERT INTO Customers VALUES
(3,'Mohan',70,12000,'FALSE');

INSERT INTO Loans VALUES
(101,1,10,SYSDATE+10);

INSERT INTO Loans VALUES
(102,2,12,SYSDATE+40);

INSERT INTO Loans VALUES
(103,3,11,SYSDATE+20);

COMMIT;



SET SERVEROUTPUT ON;

DECLARE
BEGIN

   -- Scenario 1: Apply discount to senior citizens
   FOR cust IN (
      SELECT CustomerID, Age
      FROM Customers
   )
   LOOP
      IF cust.Age > 60 THEN

         UPDATE Loans
         SET InterestRate = InterestRate - 1
         WHERE CustomerID = cust.CustomerID;

      END IF;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Interest Rate Discount Applied'
   );

   -- Scenario 2: Mark high-balance customers as VIP
   FOR cust IN (
      SELECT CustomerID, Balance
      FROM Customers
   )
   LOOP

      IF cust.Balance > 10000 THEN

         UPDATE Customers
         SET IsVIP = 'TRUE'
         WHERE CustomerID = cust.CustomerID;

      END IF;

   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'VIP Status Updated'
   );

   -- Scenario 3: Print loan reminders
   FOR loan IN (
      SELECT CustomerID,
             LoanID,
             DueDate
      FROM Loans
      WHERE DueDate <= SYSDATE + 30
   )
   LOOP

      DBMS_OUTPUT.PUT_LINE(
         'Reminder: Customer '
         || loan.CustomerID ||
         ' Loan '
         || loan.LoanID ||
         ' Due on '
         || loan.DueDate
      );

   END LOOP;

END;
/



SELECT * FROM Customers;



SELECT * FROM Loans;
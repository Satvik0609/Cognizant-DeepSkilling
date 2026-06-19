CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Balance NUMBER
);


INSERT INTO SavingsAccounts
VALUES (1,'Ram',10000);

INSERT INTO SavingsAccounts
VALUES (2,'Shyam',20000);

INSERT INTO SavingsAccounts
VALUES (3,'Mohan',15000);

INSERT INTO Employees
VALUES (1,'Raj','IT',50000);

INSERT INTO Employees
VALUES (2,'Asha','IT',60000);

INSERT INTO Employees
VALUES (3,'Kiran','HR',45000);

INSERT INTO Accounts
VALUES (1,'Ram',10000);

INSERT INTO Accounts
VALUES (2,'Shyam',5000);

COMMIT;


-- SCENARIO 1


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

   UPDATE SavingsAccounts
   SET Balance = Balance + (Balance * 0.01);

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Monthly Interest Applied Successfully'
   );

END;
/

BEGIN
   ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccounts;


-- SCENARIO 2


CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
)
IS
BEGIN

   UPDATE Employees
   SET Salary =
       Salary +
       (Salary * p_bonus_percent / 100)
   WHERE Department = p_department;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Employee Bonus Updated Successfully'
   );

END;
/

BEGIN
   UpdateEmployeeBonus('IT',10);
END;
/

SELECT * FROM Employees;


-- SCENARIO 3


CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_source_account IN NUMBER,
    p_target_account IN NUMBER,
    p_amount IN NUMBER
)
IS

   v_balance NUMBER;

BEGIN

   SELECT Balance
   INTO v_balance
   FROM Accounts
   WHERE AccountID = p_source_account;

   IF v_balance >= p_amount THEN

      UPDATE Accounts
      SET Balance = Balance - p_amount
      WHERE AccountID = p_source_account;

      UPDATE Accounts
      SET Balance = Balance + p_amount
      WHERE AccountID = p_target_account;

      COMMIT;

      DBMS_OUTPUT.PUT_LINE(
         'Transfer Successful'
      );

   ELSE

      DBMS_OUTPUT.PUT_LINE(
         'Insufficient Balance'
      );

   END IF;

END;
/

BEGIN
   TransferFunds(1,2,3000);
END;
/

SELECT * FROM Accounts;
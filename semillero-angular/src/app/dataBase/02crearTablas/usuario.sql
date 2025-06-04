DECLARE @pass NVARCHAR(50) = 'qwerty12345*';
INSERT INTO dbo.Users(Username,PasswordHash)
VALUES
('admin',HASHBYTES('SHA2_512',@pass));
GO

DECLARE @pass NVARCHAR(50) = 'asdfg12345*';
INSERT INTO dbo.Users(Username,PasswordHash)
VALUES
('admin2',HASHBYTES('SHA2_512',@pass));
GO

SELECT *FROM dbo.Users;
GO



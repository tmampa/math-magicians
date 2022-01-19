import calculate from './calculate';


describe('unit tests for calculate.js', () => {
  test('= is clicked the result should be addition', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '+',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: '120',
      next: null,
      operation: null,
    });
  });

  test('= is clicked the result should be subtraction', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '-',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: '80',
      next: null,
      operation: null,
    });
  });

  test('= is clicked the result should be multiplication', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: 'x',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: '2000',
      next: null,
      operation: null,
    });
  });

  test('= is clicked the result should be Division', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '÷',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  test('= is clicked the result should be modulo', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '%',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('= is clicked the result should be error Unknown operation', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '*',
    };
    const buttonName = '=';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: 'Unknown operation',
      next: null,
      operation: null,
    });
  });

  test('+/- is clicked the result should be positive/negative', () => {
    //Arrange
    const obj = {
      total: null,
      next: 200,
      operation: null,
    };
    const buttonName = '+/-';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      next: '-200',
    });
  });

  test('AC is clicked the result should be RESTART', () => {
    //Arrange
    const obj = {
      total: 100,
      next: 20,
      operation: '+',
    };
    const buttonName = 'AC';

    //Act
    const result = calculate(obj, buttonName);

    //Assert
    expect(result).toStrictEqual({
      total: 0,
      next: null,
      operation: null,
    });
  });
});

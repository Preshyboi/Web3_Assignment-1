const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    fuelLevel: 100,
    isRunning: false
};

// Function to start the car using CONDITIONAL STATEMENTS
function startCar() {
    if (car.fuelLevel > 0) {
        car.isRunning = true;
        console.log('Car started.' + '\n');
    } else {
        console.log('Cannot start the car. Fuel level is too low.' + '\n');
    }
}

// Function to drive the car using FOR & WHILE LOOP
function driveCar(distance) {
    if (!car.isRunning) {
        console.log('Start the car first.' + '\n');
        return;
    }

    for (let i = 0; i < distance; i++) {
        if (car.fuelLevel <= 0) {
            console.log('Out of fuel. Stopping the car.' + '\n');
            car.isRunning = false;
            break;
        }
        car.fuelLevel -= 1;
        console.log(`Driving... Fuel level: ${car.fuelLevel}`);
    }
}

// Function to refuel the car using JUMPING STATEMENTS
function refuelCar(amount) {
    if (amount <= 0) {
        console.log('Invalid fuel amount.' + '\n');
        return;
    }

    car.fuelLevel += amount;
    console.log(`Car refueled. Current fuel level: ${car.fuelLevel}` + '\n');
}

// Function to stop the car 
function stopCar() {
    if (car.isRunning) {
        car.isRunning = false;
        console.log('Car stopped.' + '\n');
    } else {
        console.log('Car is already stopped.' + '\n');
    }
}

// Main function with ERROR HANDLING
function main() {
    try {
        startCar();
        driveCar(10);
        stopCar();
        refuelCar(20);
        startCar();
        driveCar(8);
        stopCar();
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}


main();
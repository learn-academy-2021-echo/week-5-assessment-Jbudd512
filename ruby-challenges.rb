# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

# Expected output: ['coffee', 'soda water']
# Expected output: ['tea', 'water', 'soda water']

def charSearch(array, character)
    newArray = []
    for array in array do
    if array.include? character
        newArray << array
        end
    end
    newArray
end

p charSearch(['coffee', 'tea', 'juice', 'water', 'soda water'], 'o')
p charSearch(['coffee', 'tea', 'juice', 'water', 'soda water'], 't')

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# Expected output: 76
# Expected output: 100

def summation array
    array.sum
end

p summation([42, 7, 27])
p summation([25, 17, 47, 11])

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def accelerate(accel)
        @accel = accel
        @current_speed += @accel
        @current_speed
    end
    def brake(braking)
        @braking = braking
        @current_speed -= @braking
        if @current_speed < 0
            @current_speed = 0
        end
        @current_speed
    end
end

trek_bike = Bike.new("Trek")
puts trek_bike.bike_info
puts trek_bike.accelerate(10)
puts trek_bike.accelerate(20)
puts trek_bike.brake(10)
puts trek_bike.brake(30)


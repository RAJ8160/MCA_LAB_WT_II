// 1.Install Mongoose library using NPM
// please check node -v and  npm -v already install


//2.Demonstrate the use mongoose functions.
//Connect to MongoDB , Define schemas , Create models , Perform CRUD operations easily

//2.mongoose.Schema(), 4.Model.prototype.save(), 5.Model.find(), 6.Model.findOne(),
//7. Model.findById(), 8.Model.findByIdAndUpdate(), 9.Model.findByIdAndDelete(), 10.Model.updateOne() / updateMany(),
//11. Model.deleteOne() / deleteMany(), 12. Model.create(), 13. Model.countDocuments(),
//14. Schema middleware, 15.chema methods & statics


//3.Create a Database using MongoDBCompass for faculty.
//4.Create a Database using MongoDBCompass for student.
//5.Create a Database using MongoDBCompass for product.




const mongoose = require('mongoose');

async function main() {
    // 1) Connect to MongoDB
    // Default local MongoDB server and a database named 'schoolShopDB'
    await mongoose.connect('mongodb://localhost:27017/schoolShopDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // 2) Define Schemas
    const facultySchema = new mongoose.Schema({
        name: String,
        department: String,
        email: String,
        hireDate: Date
    });

    const studentSchema = new mongoose.Schema({
        name: String,
        rollNo: Number,
        course: String,
        year: Number
    });

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        inStock: Boolean,
        tags: [String]
    });

    // 3) Create Models
    const Faculty = mongoose.model('Faculty', facultySchema);   // collection: faculties
    const Student = mongoose.model('Student', studentSchema);   // collection: students
    const Product = mongoose.model('Product', productSchema);   // collection: products

    // ---- CREATE documents ----
    const f1 = await Faculty.create({
        name: 'Dr. Anand',
        department: 'Computer Science',
        email: 'anand@example.com',
        hireDate: new Date('2020-07-01')
    });

    const s1 = await Student.create({
        name: 'Priya',
        rollNo: 101,
        course: 'BCA',
        year: 2
    });

    const p1 = await Product.create({
        name: 'Notebook',
        price: 45,
        inStock: true,
        tags: ['stationery', 'paper']
    });

    console.log('Inserted:', f1.name, s1.name, p1.name);

    // ---- READ documents ----
    const allFaculties = await Faculty.find();         // find all
    const someStudents = await Student.find({ year: 2 }); // find with filter
    const productByName = await Product.findOne({ name: 'Notebook' });

    console.log('Faculties:', allFaculties.length);
    console.log('2nd year students:', someStudents.length);
    console.log('Found product:', productByName && productByName.name);

    // ---- UPDATE documents ----
    // Update one student's year
    await Student.updateOne({ rollNo: 101 }, { $set: { year: 3 } });
    // Or find and update+return new doc:
    const updatedProduct = await Product.findOneAndUpdate(
        { name: 'Notebook' },
        { $set: { price: 50 } },
        { new: true }
    );
    console.log('Updated product price:', updatedProduct.price);

    // ---- DELETE documents ----
    // Delete a faculty by id:
    // await Faculty.deleteOne({ _id: f1._id });
    // Or delete many products with inStock false:
    // await Product.deleteMany({ inStock: false });

    // ---- Extras ----
    const countStudents = await Student.countDocuments();
    console.log('Total students:', countStudents);

    // Close connection
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
}

main().catch(err => console.error(err));





function Customers() {
    console.log(`Download...`);

    setTimeout(function(){
        console.log(`Complete`)
    }, 3000);
}

try {
    any();
} catch (error) {
    console.log(error);
} finally {
    console.log(`It's always done`)
};
Customers();

import { query, mutation } from "./_generated/server";
export const saveSketch=mutation(({ db }, { prompt,image } :{ prompt : string, image: string}) => {
    console.log(prompt);
    db.insert("sketches",{
        prompt,
        createdAt: Date.now(),
    });


    return{
        message: "success",
    }
});
export const getSketches =query(async({db})=>{
    const sketches = await db.query("sketches").collect();
    return sketches;
});
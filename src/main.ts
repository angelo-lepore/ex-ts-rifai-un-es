// import dayjs
import dayjs from "dayjs";

// Tipi delle API

interface Recipe {
  id: number;
  name: string;
  userId: number;
}

interface RecipeError {
  message: string;
}

interface Chef {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
}

interface ChefError {
  message: string;
}

// Funzione principale

async function getChefBirthday(id: number): Promise<string> {
  let recipe: Recipe;

  // Recupero la ricetta
  try {
    const responseRecipe: Response = await fetch(
      `https://dummyjson.com/recipes/${id}`
    );

    const data: Recipe | RecipeError = await responseRecipe.json();

    if ("message" in data) {
      throw new Error(data.message);
    }

    recipe = data;
  } catch (error) {
    console.error(error);
    throw new Error(`Errore: Ricetta con id ${id} non recuperata!`);
  }

  let chef: Chef;

  // Recupero i dati dello chef
  try {
    const responseChef: Response = await fetch(
      `https://dummyjson.com/users/${recipe.userId}`
    );

    const data: Chef | ChefError = await responseChef.json();

    if ("message" in data) {
      throw new Error(data.message);
    }

    chef = data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Errore: Chef con id ${recipe.userId} non recuperato!`
    );
  }

  // Formattazione data di nascita
  const birthday: string = dayjs(chef.birthDate).format("DD/MM/YYYY");

  return birthday;
}

// Utilizzo della funzione

(async (): Promise<void> => {
  try {
    const birthday: string = await getChefBirthday(7);
    console.log("Data di nascita dello chef:", birthday);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Errore:", error.message);
    }
  }
})();

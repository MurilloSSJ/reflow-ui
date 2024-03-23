const getDags = async () => {
    const response = await fetch(`teste/dags`);
    const data = await response.json();
    return data;
}
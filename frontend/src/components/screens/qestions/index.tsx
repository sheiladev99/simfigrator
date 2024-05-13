import CardGroup from "@/components/shared/card-group";

function QuestiosScreen() {
  return (
    <CardGroup
      variant="filter"
      type="radio"
      data={[
        { title: "title1" },
        { title: "title2" },
        { title: "title3" },
        { title: "title4" },
        { title: "title5" },
      ]}
    />
  );
}

export default QuestiosScreen;

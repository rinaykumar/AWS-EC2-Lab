package demo;

import static spark.Spark.*;

public class SparkDemo {
  public static void main(String[] args) {
    port(3001);
    get("/api/hello", (req, res) -> "hi"); // test
  }
}

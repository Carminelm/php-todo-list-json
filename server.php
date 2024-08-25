<?php

$string = file_get_contents("todo.json");


if (isset($_POST["text"])) {
    $add_todo = [
        "text" => $_POST["text"],
        "done" => false
    ];
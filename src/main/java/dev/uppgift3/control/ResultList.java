package dev.uppgift3.control;

import java.util.List;

public class ResultList {
    private String things;

    public ResultList(String things) {
        this.things = things;
    }

    @Override
    public String toString() {
        return "ResultList:" + things;
    }
}

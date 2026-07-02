#ifndef INFO_H
#define INFO_H

#include <string>
#include <unordered_set>
#include <vector>
#include <iostream>
#include <nlohmann/json.hpp>

class Info
{
private:
    std::unordered_set<std::string> seguidores;
    std::unordered_set<std::string> seguidos;
    std::vector<std::string> noseguidores;

public:
    Info();
    ~Info();
    void interseccion();
    bool load(const std::string &archivoSeguidos, const std::string &archivoSeguidores);
    friend std::ostream &operator<<(std::ostream &flujo, const Info &info);
};

#endif // INFO_H
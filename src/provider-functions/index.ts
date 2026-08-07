/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from provider function schema

import * as cdktn from 'cdktn';

/**
* Provider-defined functions of the google provider.
*/
export class GoogleProviderFunctions {
  private readonly providerLocalName: string;

  /**
  * @param providerLocalName The local name of the provider in required_providers; defaults to the registry short name. Override when the provider is declared under a different local name — aliases do not change the namespace, local names do.
  */
  constructor(providerLocalName: string) {
    this.providerLocalName = providerLocalName;
  }

  /**
  * Takes a single string argument, which should be a resource id, self link, or OP style resource name. This function will either return the location name from the input string or raise an error due to no location being present in the string. The function uses the presence of "locations/{{location}}/" in the input string to identify the location name, e.g. when the function is passed the id "projects/my-project/locations/us-central1/services/my-service" as an argument it will return "us-central1".
  * @param {string} id - A string of a resource's id, a resource's self link, or an OP style resource name. For example, "projects/my-project/locations/us-central1/services/my-service" and "https://run.googleapis.com/v2/projects/my-project/locations/us-central1/services/my-service" are valid values containing locations
  * @returns {string}
  */
  public locationFromId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "location_from_id", [id]));
  }

  /**
  * Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. This function will return the short-form name of a resource from the input string, or raise an error due to a problem with the input string. The function returns the final element in the input string as the resource's name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-instance".
  * @param {string} id - A string of a resource's id, resource URI, self link, or full resource name. For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values
  * @returns {string}
  */
  public nameFromId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "name_from_id", [id]));
  }

  /**
  * Takes a single string argument, which should be a resource's id, resource URI, self link, or full resource name. This function will either return the project name from the input string or raise an error due to no project being present in the string. The function uses the presence of "projects/{{project}}/" in the input string to identify the project name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "my-project".
  * @param {string} id - A string of a resource's id, resource URI, self link, or full resource name. For example, "projects/my-project/zones/us-central1-c/instances/my-instance", "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" and "//gkehub.googleapis.com/projects/my-project/locations/us-central1/memberships/my-membership" are valid values
  * @returns {string}
  */
  public projectFromId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "project_from_id", [id]));
  }

  /**
  * Takes a single string argument, which should be a resource id, self link, or OP style resource name. This function will either return the region name from the input string or raise an error due to no region being present in the string. The function uses the presence of "regions/{{region}}/" in the input string to identify the region name, e.g. when the function is passed the id "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" as an argument it will return "us-central1".
  * @param {string} id - A string of a resource's id, a resource's self link, or an OP style resource name. For example, "projects/my-project/regions/us-central1/subnetworks/my-subnetwork" and "https://www.googleapis.com/compute/v1/projects/my-project/regions/us-central1/subnetworks/my-subnetwork" are valid values containing regions
  * @returns {string}
  */
  public regionFromId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "region_from_id", [id]));
  }

  /**
  * Takes a single string argument, which should be a resource's zone.
  * @param {string} zone - A string of a resource's zone.
  * @returns {string}
  */
  public regionFromZone(zone: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "region_from_zone", [zone]));
  }

  /**
  * Takes a single string argument, which should be an id or self link of a resource. This function will either return the zone name from the input string or raise an error due to no zone being present in the string. The function uses the presence of "zones/{{zone}}/" in the input string to identify the zone name, e.g. when the function is passed the id "projects/my-project/zones/us-central1-c/instances/my-instance" as an argument it will return "us-central1-c".
  * @param {string} id - An id of a resource, or a self link. For example, both "projects/my-project/zones/us-central1-c/instances/my-instance" and "https://www.googleapis.com/compute/v1/projects/my-project/zones/us-central1-c/instances/my-instance" are valid inputs
  * @returns {string}
  */
  public zoneFromId(id: string): string {
    return cdktn.Token.asString(cdktn.TerraformProviderFunction.invoke(this.providerLocalName, "zone_from_id", [id]));
  }
}

/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServiceDirectoryEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * IPv4 or IPv6 address of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#address ServiceDirectoryEndpoint#address}
  */
  readonly address?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#deletion_policy ServiceDirectoryEndpoint#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The Resource ID must be 1-63 characters long, including digits,
  * lowercase letters or the hyphen character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#endpoint_id ServiceDirectoryEndpoint#endpoint_id}
  */
  readonly endpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#id ServiceDirectoryEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata for the endpoint. This data can be consumed
  * by service clients. The entire metadata dictionary may contain
  * up to 512 characters, spread across all key-value pairs.
  * Metadata that goes beyond any these limits will be rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#metadata ServiceDirectoryEndpoint#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#network ServiceDirectoryEndpoint#network}
  */
  readonly network?: string;
  /**
  * Port that the endpoint is running on, must be in the
  * range of [0, 65535]. If unspecified, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#port ServiceDirectoryEndpoint#port}
  */
  readonly port?: number;
  /**
  * The resource name of the service that this endpoint provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#service ServiceDirectoryEndpoint#service}
  */
  readonly service: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#timeouts ServiceDirectoryEndpoint#timeouts}
  */
  readonly timeouts?: ServiceDirectoryEndpointTimeouts;
}
export interface ServiceDirectoryEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#create ServiceDirectoryEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#delete ServiceDirectoryEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#update ServiceDirectoryEndpoint#update}
  */
  readonly update?: string;
}

export function serviceDirectoryEndpointTimeoutsToTerraform(struct?: ServiceDirectoryEndpointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function serviceDirectoryEndpointTimeoutsToHclTerraform(struct?: ServiceDirectoryEndpointTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDirectoryEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceDirectoryEndpointTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDirectoryEndpointTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint google_service_directory_endpoint}
*/
export class ServiceDirectoryEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_directory_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServiceDirectoryEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDirectoryEndpoint to import
  * @param importFromId The id of the existing ServiceDirectoryEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDirectoryEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_service_directory_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/service_directory_endpoint google_service_directory_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDirectoryEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDirectoryEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_directory_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._deletionPolicy = config.deletionPolicy;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._metadata = config.metadata;
    this._network = config.network;
    this._port = config.port;
    this._service = config.service;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: string; 
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }
  public set endpointId(value: string) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceDirectoryEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceDirectoryEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktn.stringToTerraform(this._address),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      endpoint_id: cdktn.stringToTerraform(this._endpointId),
      id: cdktn.stringToTerraform(this._id),
      metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
      network: cdktn.stringToTerraform(this._network),
      port: cdktn.numberToTerraform(this._port),
      service: cdktn.stringToTerraform(this._service),
      timeouts: serviceDirectoryEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktn.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_id: {
        value: cdktn.stringToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      network: {
        value: cdktn.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service: {
        value: cdktn.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: serviceDirectoryEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceDirectoryEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

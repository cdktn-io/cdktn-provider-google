/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VmwareengineNetworkPeeringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#deletion_policy VmwareengineNetworkPeering#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User-provided description for this network peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#description VmwareengineNetworkPeering#description}
  */
  readonly description?: string;
  /**
  * True if custom routes are exported to the peered network; false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#export_custom_routes VmwareengineNetworkPeering#export_custom_routes}
  */
  readonly exportCustomRoutes?: boolean | cdktn.IResolvable;
  /**
  * True if all subnet routes with a public IP address range are exported; false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#export_custom_routes_with_public_ip VmwareengineNetworkPeering#export_custom_routes_with_public_ip}
  */
  readonly exportCustomRoutesWithPublicIp?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#id VmwareengineNetworkPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if custom routes are imported from the peered network; false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#import_custom_routes VmwareengineNetworkPeering#import_custom_routes}
  */
  readonly importCustomRoutes?: boolean | cdktn.IResolvable;
  /**
  * True if custom routes are imported from the peered network; false otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#import_custom_routes_with_public_ip VmwareengineNetworkPeering#import_custom_routes_with_public_ip}
  */
  readonly importCustomRoutesWithPublicIp?: boolean | cdktn.IResolvable;
  /**
  * The ID of the Network Peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#name VmwareengineNetworkPeering#name}
  */
  readonly name: string;
  /**
  * The relative resource name of the network to peer with a standard VMware Engine network.
  * The provided network can be a consumer VPC network or another standard VMware Engine network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#peer_network VmwareengineNetworkPeering#peer_network}
  */
  readonly peerNetwork: string;
  /**
  * The type of the network to peer with the VMware Engine network. Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE", "GOOGLE_CLOUD_NETAPP_VOLUMES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#peer_network_type VmwareengineNetworkPeering#peer_network_type}
  */
  readonly peerNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#project VmwareengineNetworkPeering#project}
  */
  readonly project?: string;
  /**
  * The relative resource name of the VMware Engine network. Specify the name in the following form:
  * projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
  * can either be a project number or a project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#vmware_engine_network VmwareengineNetworkPeering#vmware_engine_network}
  */
  readonly vmwareEngineNetwork: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#timeouts VmwareengineNetworkPeering#timeouts}
  */
  readonly timeouts?: VmwareengineNetworkPeeringTimeouts;
}
export interface VmwareengineNetworkPeeringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#create VmwareengineNetworkPeering#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#delete VmwareengineNetworkPeering#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#update VmwareengineNetworkPeering#update}
  */
  readonly update?: string;
}

export function vmwareengineNetworkPeeringTimeoutsToTerraform(struct?: VmwareengineNetworkPeeringTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function vmwareengineNetworkPeeringTimeoutsToHclTerraform(struct?: VmwareengineNetworkPeeringTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class VmwareengineNetworkPeeringTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmwareengineNetworkPeeringTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VmwareengineNetworkPeeringTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering google_vmwareengine_network_peering}
*/
export class VmwareengineNetworkPeering extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VmwareengineNetworkPeering resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareengineNetworkPeering to import
  * @param importFromId The id of the existing VmwareengineNetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareengineNetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/vmwareengine_network_peering google_vmwareengine_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareengineNetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareengineNetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._exportCustomRoutes = config.exportCustomRoutes;
    this._exportCustomRoutesWithPublicIp = config.exportCustomRoutesWithPublicIp;
    this._id = config.id;
    this._importCustomRoutes = config.importCustomRoutes;
    this._importCustomRoutesWithPublicIp = config.importCustomRoutesWithPublicIp;
    this._name = config.name;
    this._peerNetwork = config.peerNetwork;
    this._peerNetworkType = config.peerNetworkType;
    this._project = config.project;
    this._vmwareEngineNetwork = config.vmwareEngineNetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // export_custom_routes - computed: false, optional: true, required: false
  private _exportCustomRoutes?: boolean | cdktn.IResolvable; 
  public get exportCustomRoutes() {
    return this.getBooleanAttribute('export_custom_routes');
  }
  public set exportCustomRoutes(value: boolean | cdktn.IResolvable) {
    this._exportCustomRoutes = value;
  }
  public resetExportCustomRoutes() {
    this._exportCustomRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCustomRoutesInput() {
    return this._exportCustomRoutes;
  }

  // export_custom_routes_with_public_ip - computed: false, optional: true, required: false
  private _exportCustomRoutesWithPublicIp?: boolean | cdktn.IResolvable; 
  public get exportCustomRoutesWithPublicIp() {
    return this.getBooleanAttribute('export_custom_routes_with_public_ip');
  }
  public set exportCustomRoutesWithPublicIp(value: boolean | cdktn.IResolvable) {
    this._exportCustomRoutesWithPublicIp = value;
  }
  public resetExportCustomRoutesWithPublicIp() {
    this._exportCustomRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCustomRoutesWithPublicIpInput() {
    return this._exportCustomRoutesWithPublicIp;
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

  // import_custom_routes - computed: false, optional: true, required: false
  private _importCustomRoutes?: boolean | cdktn.IResolvable; 
  public get importCustomRoutes() {
    return this.getBooleanAttribute('import_custom_routes');
  }
  public set importCustomRoutes(value: boolean | cdktn.IResolvable) {
    this._importCustomRoutes = value;
  }
  public resetImportCustomRoutes() {
    this._importCustomRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesInput() {
    return this._importCustomRoutes;
  }

  // import_custom_routes_with_public_ip - computed: false, optional: true, required: false
  private _importCustomRoutesWithPublicIp?: boolean | cdktn.IResolvable; 
  public get importCustomRoutesWithPublicIp() {
    return this.getBooleanAttribute('import_custom_routes_with_public_ip');
  }
  public set importCustomRoutesWithPublicIp(value: boolean | cdktn.IResolvable) {
    this._importCustomRoutesWithPublicIp = value;
  }
  public resetImportCustomRoutesWithPublicIp() {
    this._importCustomRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesWithPublicIpInput() {
    return this._importCustomRoutesWithPublicIp;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peer_network - computed: false, optional: false, required: true
  private _peerNetwork?: string; 
  public get peerNetwork() {
    return this.getStringAttribute('peer_network');
  }
  public set peerNetwork(value: string) {
    this._peerNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkInput() {
    return this._peerNetwork;
  }

  // peer_network_type - computed: false, optional: false, required: true
  private _peerNetworkType?: string; 
  public get peerNetworkType() {
    return this.getStringAttribute('peer_network_type');
  }
  public set peerNetworkType(value: string) {
    this._peerNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNetworkTypeInput() {
    return this._peerNetworkType;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vmware_engine_network - computed: false, optional: false, required: true
  private _vmwareEngineNetwork?: string; 
  public get vmwareEngineNetwork() {
    return this.getStringAttribute('vmware_engine_network');
  }
  public set vmwareEngineNetwork(value: string) {
    this._vmwareEngineNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareEngineNetworkInput() {
    return this._vmwareEngineNetwork;
  }

  // vmware_engine_network_canonical - computed: true, optional: false, required: false
  public get vmwareEngineNetworkCanonical() {
    return this.getStringAttribute('vmware_engine_network_canonical');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwareengineNetworkPeeringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwareengineNetworkPeeringTimeouts) {
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
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      export_custom_routes: cdktn.booleanToTerraform(this._exportCustomRoutes),
      export_custom_routes_with_public_ip: cdktn.booleanToTerraform(this._exportCustomRoutesWithPublicIp),
      id: cdktn.stringToTerraform(this._id),
      import_custom_routes: cdktn.booleanToTerraform(this._importCustomRoutes),
      import_custom_routes_with_public_ip: cdktn.booleanToTerraform(this._importCustomRoutesWithPublicIp),
      name: cdktn.stringToTerraform(this._name),
      peer_network: cdktn.stringToTerraform(this._peerNetwork),
      peer_network_type: cdktn.stringToTerraform(this._peerNetworkType),
      project: cdktn.stringToTerraform(this._project),
      vmware_engine_network: cdktn.stringToTerraform(this._vmwareEngineNetwork),
      timeouts: vmwareengineNetworkPeeringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_custom_routes: {
        value: cdktn.booleanToHclTerraform(this._exportCustomRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_custom_routes_with_public_ip: {
        value: cdktn.booleanToHclTerraform(this._exportCustomRoutesWithPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_custom_routes: {
        value: cdktn.booleanToHclTerraform(this._importCustomRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_custom_routes_with_public_ip: {
        value: cdktn.booleanToHclTerraform(this._importCustomRoutesWithPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_network: {
        value: cdktn.stringToHclTerraform(this._peerNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_network_type: {
        value: cdktn.stringToHclTerraform(this._peerNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmware_engine_network: {
        value: cdktn.stringToHclTerraform(this._vmwareEngineNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vmwareengineNetworkPeeringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmwareengineNetworkPeeringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

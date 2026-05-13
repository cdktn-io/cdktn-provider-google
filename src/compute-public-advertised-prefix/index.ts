/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ComputePublicAdvertisedPrefixConfig extends cdktn.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#description ComputePublicAdvertisedPrefix#description}
  */
  readonly description?: string;
  /**
  * The IPv4 address to be used for reverse DNS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#dns_verification_ip ComputePublicAdvertisedPrefix#dns_verification_ip}
  */
  readonly dnsVerificationIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#id ComputePublicAdvertisedPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The address range, in CIDR format, represented by this public advertised prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#ip_cidr_range ComputePublicAdvertisedPrefix#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The internet access type for IPv6 Public Advertised Prefixes. It can be
  * set to one of following:
  *   * EXTERNAL: Default access type. The prefix will be announced to the
  *   internet. All children PDPs will have access type as EXTERNAL.
  *   * INTERNAL: The prefix won’t be announced to the internet. Prefix will
  *   be used privately within Google Cloud. All children PDPs will have
  *   access type as INTERNAL. Possible values: ["EXTERNAL", "INTERNAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#ipv6_access_type ComputePublicAdvertisedPrefix#ipv6_access_type}
  */
  readonly ipv6AccessType?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#name ComputePublicAdvertisedPrefix#name}
  */
  readonly name: string;
  /**
  * Specifies how child public delegated prefix will be scoped. pdpScope
  * must be one of: GLOBAL, REGIONAL
  * * REGIONAL: The public delegated prefix is regional only. The
  * provisioning will take a few minutes.
  * * GLOBAL: The public delegated prefix is global only. The provisioning
  * will take ~4 weeks. Possible values: ["GLOBAL", "REGIONAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#pdp_scope ComputePublicAdvertisedPrefix#pdp_scope}
  */
  readonly pdpScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#project ComputePublicAdvertisedPrefix#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#timeouts ComputePublicAdvertisedPrefix#timeouts}
  */
  readonly timeouts?: ComputePublicAdvertisedPrefixTimeouts;
}
export interface ComputePublicAdvertisedPrefixTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#create ComputePublicAdvertisedPrefix#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#delete ComputePublicAdvertisedPrefix#delete}
  */
  readonly delete?: string;
}

export function computePublicAdvertisedPrefixTimeoutsToTerraform(struct?: ComputePublicAdvertisedPrefixTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function computePublicAdvertisedPrefixTimeoutsToHclTerraform(struct?: ComputePublicAdvertisedPrefixTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputePublicAdvertisedPrefixTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputePublicAdvertisedPrefixTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputePublicAdvertisedPrefixTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix}
*/
export class ComputePublicAdvertisedPrefix extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_public_advertised_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ComputePublicAdvertisedPrefix resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputePublicAdvertisedPrefix to import
  * @param importFromId The id of the existing ComputePublicAdvertisedPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputePublicAdvertisedPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_public_advertised_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/compute_public_advertised_prefix google_compute_public_advertised_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePublicAdvertisedPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePublicAdvertisedPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_public_advertised_prefix',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.32.0',
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
    this._description = config.description;
    this._dnsVerificationIp = config.dnsVerificationIp;
    this._id = config.id;
    this._ipCidrRange = config.ipCidrRange;
    this._ipv6AccessType = config.ipv6AccessType;
    this._name = config.name;
    this._pdpScope = config.pdpScope;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_verification_ip - computed: false, optional: true, required: false
  private _dnsVerificationIp?: string; 
  public get dnsVerificationIp() {
    return this.getStringAttribute('dns_verification_ip');
  }
  public set dnsVerificationIp(value: string) {
    this._dnsVerificationIp = value;
  }
  public resetDnsVerificationIp() {
    this._dnsVerificationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVerificationIpInput() {
    return this._dnsVerificationIp;
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

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // ipv6_access_type - computed: true, optional: true, required: false
  private _ipv6AccessType?: string; 
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }
  public set ipv6AccessType(value: string) {
    this._ipv6AccessType = value;
  }
  public resetIpv6AccessType() {
    this._ipv6AccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessTypeInput() {
    return this._ipv6AccessType;
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

  // pdp_scope - computed: false, optional: true, required: false
  private _pdpScope?: string; 
  public get pdpScope() {
    return this.getStringAttribute('pdp_scope');
  }
  public set pdpScope(value: string) {
    this._pdpScope = value;
  }
  public resetPdpScope() {
    this._pdpScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdpScopeInput() {
    return this._pdpScope;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePublicAdvertisedPrefixTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePublicAdvertisedPrefixTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      dns_verification_ip: cdktn.stringToTerraform(this._dnsVerificationIp),
      id: cdktn.stringToTerraform(this._id),
      ip_cidr_range: cdktn.stringToTerraform(this._ipCidrRange),
      ipv6_access_type: cdktn.stringToTerraform(this._ipv6AccessType),
      name: cdktn.stringToTerraform(this._name),
      pdp_scope: cdktn.stringToTerraform(this._pdpScope),
      project: cdktn.stringToTerraform(this._project),
      timeouts: computePublicAdvertisedPrefixTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_verification_ip: {
        value: cdktn.stringToHclTerraform(this._dnsVerificationIp),
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
      ip_cidr_range: {
        value: cdktn.stringToHclTerraform(this._ipCidrRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_access_type: {
        value: cdktn.stringToHclTerraform(this._ipv6AccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdp_scope: {
        value: cdktn.stringToHclTerraform(this._pdpScope),
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
      timeouts: {
        value: computePublicAdvertisedPrefixTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputePublicAdvertisedPrefixTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

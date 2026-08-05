/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServiceAccountKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#deletion_policy ServiceAccountKey#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#id ServiceAccountKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger recreation of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#keepers ServiceAccountKey#keepers}
  */
  readonly keepers?: { [key: string]: string };
  /**
  * The algorithm used to generate the key, used only on create. KEY_ALG_RSA_2048 is the default algorithm. Valid values are: "KEY_ALG_RSA_1024", "KEY_ALG_RSA_2048".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#key_algorithm ServiceAccountKey#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#private_key_type ServiceAccountKey#private_key_type}
  */
  readonly privateKeyType?: string;
  /**
  * A field that allows clients to upload their own public key. If set, use this public key data to create a service account key for given service account. Please note, the expected format for this field is a base64 encoded X509_PEM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#public_key_data ServiceAccountKey#public_key_data}
  */
  readonly publicKeyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#public_key_type ServiceAccountKey#public_key_type}
  */
  readonly publicKeyType?: string;
  /**
  * The ID of the parent service account of the key. This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#service_account_id ServiceAccountKey#service_account_id}
  */
  readonly serviceAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key google_service_account_key}
*/
export class ServiceAccountKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServiceAccountKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccountKey to import
  * @param importFromId The id of the existing ServiceAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_service_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/service_account_key google_service_account_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._id = config.id;
    this._keepers = config.keepers;
    this._keyAlgorithm = config.keyAlgorithm;
    this._privateKeyType = config.privateKeyType;
    this._publicKeyData = config.publicKeyData;
    this._publicKeyType = config.publicKeyType;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // keepers - computed: false, optional: true, required: false
  private _keepers?: { [key: string]: string }; 
  public get keepers() {
    return this.getStringMapAttribute('keepers');
  }
  public set keepers(value: { [key: string]: string }) {
    this._keepers = value;
  }
  public resetKeepers() {
    this._keepers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepersInput() {
    return this._keepers;
  }

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_type - computed: false, optional: true, required: false
  private _privateKeyType?: string; 
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }
  public set privateKeyType(value: string) {
    this._privateKeyType = value;
  }
  public resetPrivateKeyType() {
    this._privateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyTypeInput() {
    return this._privateKeyType;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // public_key_data - computed: false, optional: true, required: false
  private _publicKeyData?: string; 
  public get publicKeyData() {
    return this.getStringAttribute('public_key_data');
  }
  public set publicKeyData(value: string) {
    this._publicKeyData = value;
  }
  public resetPublicKeyData() {
    this._publicKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyDataInput() {
    return this._publicKeyData;
  }

  // public_key_type - computed: false, optional: true, required: false
  private _publicKeyType?: string; 
  public get publicKeyType() {
    return this.getStringAttribute('public_key_type');
  }
  public set publicKeyType(value: string) {
    this._publicKeyType = value;
  }
  public resetPublicKeyType() {
    this._publicKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyTypeInput() {
    return this._publicKeyType;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // valid_after - computed: true, optional: false, required: false
  public get validAfter() {
    return this.getStringAttribute('valid_after');
  }

  // valid_before - computed: true, optional: false, required: false
  public get validBefore() {
    return this.getStringAttribute('valid_before');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      keepers: cdktn.hashMapper(cdktn.stringToTerraform)(this._keepers),
      key_algorithm: cdktn.stringToTerraform(this._keyAlgorithm),
      private_key_type: cdktn.stringToTerraform(this._privateKeyType),
      public_key_data: cdktn.stringToTerraform(this._publicKeyData),
      public_key_type: cdktn.stringToTerraform(this._publicKeyType),
      service_account_id: cdktn.stringToTerraform(this._serviceAccountId),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepers: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._keepers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_algorithm: {
        value: cdktn.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_type: {
        value: cdktn.stringToHclTerraform(this._privateKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_data: {
        value: cdktn.stringToHclTerraform(this._publicKeyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key_type: {
        value: cdktn.stringToHclTerraform(this._publicKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktn.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

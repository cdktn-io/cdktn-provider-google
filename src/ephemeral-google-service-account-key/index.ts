/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralGoogleServiceAccountKeyConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Whether to fetch the public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}
  */
  readonly fetchKey?: boolean | cdktn.IResolvable;
  /**
  * The algorithm used to generate the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The name of the service account key. This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}
  */
  readonly name?: string;
  /**
  * The private key, base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}
  */
  readonly privateKey?: string;
  /**
  * The type of the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}
  */
  readonly privateKeyType?: string;
  /**
  * The public key, base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}
  */
  readonly publicKeyData?: string;
  /**
  * The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}
  */
  readonly publicKeyType?: string;
  /**
  * The ID of the parent service account of the key. This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}
  */
  readonly serviceAccountId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key google_service_account_key}
*/
export class EphemeralGoogleServiceAccountKey extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_key google_service_account_key} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralGoogleServiceAccountKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EphemeralGoogleServiceAccountKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._fetchKey = config.fetchKey;
    this._keyAlgorithm = config.keyAlgorithm;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyType = config.privateKeyType;
    this._publicKeyData = config.publicKeyData;
    this._publicKeyType = config.publicKeyType;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fetch_key - computed: false, optional: true, required: false
  private _fetchKey?: boolean | cdktn.IResolvable; 
  public get fetchKey() {
    return this.getBooleanAttribute('fetch_key');
  }
  public set fetchKey(value: boolean | cdktn.IResolvable) {
    this._fetchKey = value;
  }
  public resetFetchKey() {
    this._fetchKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchKeyInput() {
    return this._fetchKey;
  }

  // key_algorithm - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_type - computed: true, optional: true, required: false
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

  // public_key_type - computed: true, optional: true, required: false
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

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fetch_key: cdktn.booleanToTerraform(this._fetchKey),
      key_algorithm: cdktn.stringToTerraform(this._keyAlgorithm),
      name: cdktn.stringToTerraform(this._name),
      private_key: cdktn.stringToTerraform(this._privateKey),
      private_key_type: cdktn.stringToTerraform(this._privateKeyType),
      public_key_data: cdktn.stringToTerraform(this._publicKeyData),
      public_key_type: cdktn.stringToTerraform(this._publicKeyType),
      service_account_id: cdktn.stringToTerraform(this._serviceAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fetch_key: {
        value: cdktn.booleanToHclTerraform(this._fetchKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_algorithm: {
        value: cdktn.stringToHclTerraform(this._keyAlgorithm),
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
      private_key: {
        value: cdktn.stringToHclTerraform(this._privateKey),
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

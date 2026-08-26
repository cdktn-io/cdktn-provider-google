/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralGoogleServiceAccountJwtConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}
  */
  readonly delegates?: string[];
  /**
  * Number of seconds until the JWT expires. If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}
  */
  readonly expiresIn?: number;
  /**
  * A JSON-encoded JWT claims set that will be included in the signed JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}
  */
  readonly payload: string;
  /**
  * The email of the service account that will sign the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}
  */
  readonly targetServiceAccount: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt google_service_account_jwt}
*/
export class EphemeralGoogleServiceAccountJwt extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_service_account_jwt";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/ephemeral-resources/service_account_jwt google_service_account_jwt} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralGoogleServiceAccountJwtConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralGoogleServiceAccountJwtConfig) {
    super(scope, id, {
      terraformResourceType: 'google_service_account_jwt',
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
    this._delegates = config.delegates;
    this._expiresIn = config.expiresIn;
    this._payload = config.payload;
    this._targetServiceAccount = config.targetServiceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegates - computed: false, optional: true, required: false
  private _delegates?: string[]; 
  public get delegates() {
    return cdktn.Fn.tolist(this.getListAttribute('delegates'));
  }
  public set delegates(value: string[]) {
    this._delegates = value;
  }
  public resetDelegates() {
    this._delegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatesInput() {
    return this._delegates;
  }

  // expires_in - computed: false, optional: true, required: false
  private _expiresIn?: number; 
  public get expiresIn() {
    return this.getNumberAttribute('expires_in');
  }
  public set expiresIn(value: number) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // jwt - computed: true, optional: false, required: false
  public get jwt() {
    return this.getStringAttribute('jwt');
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // target_service_account - computed: false, optional: false, required: true
  private _targetServiceAccount?: string; 
  public get targetServiceAccount() {
    return this.getStringAttribute('target_service_account');
  }
  public set targetServiceAccount(value: string) {
    this._targetServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceAccountInput() {
    return this._targetServiceAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegates: cdktn.listMapper(cdktn.stringToTerraform, false)(this._delegates),
      expires_in: cdktn.numberToTerraform(this._expiresIn),
      payload: cdktn.stringToTerraform(this._payload),
      target_service_account: cdktn.stringToTerraform(this._targetServiceAccount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegates: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._delegates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expires_in: {
        value: cdktn.numberToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payload: {
        value: cdktn.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_service_account: {
        value: cdktn.stringToHclTerraform(this._targetServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

# `cloudIdentityInboundOidcSsoProfile` Submodule <a name="`cloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundOidcSsoProfile <a name="CloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: CloudIdentityInboundOidcSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  rp_config: CloudIdentityInboundOidcSsoProfileRpConfig = None,
  timeouts: CloudIdentityInboundOidcSsoProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer"></a>

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rp_config`<sup>Optional</sup> <a name="rp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig">put_rp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer">reset_customer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig">reset_rp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```python
def put_idp_config(
  issuer_uri: str,
  change_password_uri: str = None
) -> None
```

###### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.issuerUri"></a>

- *Type:* str

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

###### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.changePasswordUri"></a>

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

##### `put_rp_config` <a name="put_rp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```python
def put_rp_config(
  client_id: str = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.clientId"></a>

- *Type:* str

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.clientSecret"></a>

- *Type:* str

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

##### `reset_customer` <a name="reset_customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```python
def reset_customer() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rp_config` <a name="reset_rp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```python
def reset_rp_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudIdentityInboundOidcSsoProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inbound_oidc_sso_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput">customer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rp_config_input</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```python
idp_config: CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inbound_oidc_sso_profile_id`<sup>Required</sup> <a name="inbound_oidc_sso_profile_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```python
inbound_oidc_sso_profile_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rp_config`<sup>Required</sup> <a name="rp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```python
rp_config: CloudIdentityInboundOidcSsoProfileRpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```python
timeouts: CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customer_input`<sup>Optional</sup> <a name="customer_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```python
customer_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```python
idp_config_input: CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rp_config_input`<sup>Optional</sup> <a name="rp_config_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```python
rp_config_input: CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundOidcSsoProfileConfig <a name="CloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: CloudIdentityInboundOidcSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  rp_config: CloudIdentityInboundOidcSsoProfileRpConfig = None,
  timeouts: CloudIdentityInboundOidcSsoProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```python
idp_config: CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```python
customer: str
```

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rp_config`<sup>Optional</sup> <a name="rp_config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```python
rp_config: CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```python
timeouts: CloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

### CloudIdentityInboundOidcSsoProfileIdpConfig <a name="CloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig(
  issuer_uri: str,
  change_password_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuer_uri</a></code> | <code>str</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | The **Change Password URL** of the identity provider. |

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### CloudIdentityInboundOidcSsoProfileRpConfig <a name="CloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig(
  client_id: str = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">client_id</a></code> | <code>str</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

### CloudIdentityInboundOidcSsoProfileTimeouts <a name="CloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">reset_change_password_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_password_uri` <a name="reset_change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```python
def reset_change_password_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">change_password_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuer_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuer_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_password_uri_input`<sup>Optional</sup> <a name="change_password_uri_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```python
change_password_uri_input: str
```

- *Type:* str

---

##### `issuer_uri_input`<sup>Optional</sup> <a name="issuer_uri_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```python
issuer_uri_input: str
```

- *Type:* str

---

##### `change_password_uri`<sup>Required</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

---

##### `issuer_uri`<sup>Required</sup> <a name="issuer_uri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```python
issuer_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudIdentityInboundOidcSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudIdentityInboundOidcSsoProfileRpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_oidc_sso_profile

cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudIdentityInboundOidcSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---




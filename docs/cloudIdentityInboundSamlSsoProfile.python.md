# `cloudIdentityInboundSamlSsoProfile` Submodule <a name="`cloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundSamlSsoProfile <a name="CloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: CloudIdentityInboundSamlSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: CloudIdentityInboundSamlSsoProfileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer"></a>

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#deletion_policy CloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig">put_idp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer">reset_customer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_idp_config` <a name="put_idp_config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```python
def put_idp_config(
  entity_id: str,
  single_sign_on_service_uri: str,
  change_password_uri: str = None,
  logout_redirect_uri: str = None
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.entityId"></a>

- *Type:* str

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#entity_id CloudIdentityInboundSamlSsoProfile#entity_id}

---

###### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.singleSignOnServiceUri"></a>

- *Type:* str

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri CloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

###### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.changePasswordUri"></a>

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#change_password_uri CloudIdentityInboundSamlSsoProfile#change_password_uri}

---

###### `logout_redirect_uri`<sup>Optional</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.logoutRedirectUri"></a>

- *Type:* str

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#logout_redirect_uri CloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}.

---

##### `reset_customer` <a name="reset_customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```python
def reset_customer() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudIdentityInboundSamlSsoProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inbound_saml_sso_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig">sp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput">customer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idp_config_input</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```python
idp_config: CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inbound_saml_sso_profile_id`<sup>Required</sup> <a name="inbound_saml_sso_profile_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```python
inbound_saml_sso_profile_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sp_config`<sup>Required</sup> <a name="sp_config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```python
sp_config: CloudIdentityInboundSamlSsoProfileSpConfigList
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList">CloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```python
timeouts: CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customer_input`<sup>Optional</sup> <a name="customer_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```python
customer_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_config_input`<sup>Optional</sup> <a name="idp_config_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```python
idp_config_input: CloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundSamlSsoProfileConfig <a name="CloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  idp_config: CloudIdentityInboundSamlSsoProfileIdpConfig,
  customer: str = None,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: CloudIdentityInboundSamlSsoProfileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idp_config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>str</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `idp_config`<sup>Required</sup> <a name="idp_config" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```python
idp_config: CloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#idp_config CloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```python
customer: str
```

- *Type:* str

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#customer CloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#deletion_policy CloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#display_name CloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#id CloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```python
timeouts: CloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#timeouts CloudIdentityInboundSamlSsoProfile#timeouts}

---

### CloudIdentityInboundSamlSsoProfileIdpConfig <a name="CloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig(
  entity_id: str,
  single_sign_on_service_uri: str,
  change_password_uri: str = None,
  logout_redirect_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entity_id</a></code> | <code>str</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">single_sign_on_service_uri</a></code> | <code>str</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logout_redirect_uri</a></code> | <code>str</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#entity_id CloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```python
single_sign_on_service_uri: str
```

- *Type:* str

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri CloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `change_password_uri`<sup>Optional</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#change_password_uri CloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logout_redirect_uri`<sup>Optional</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```python
logout_redirect_uri: str
```

- *Type:* str

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#logout_redirect_uri CloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### CloudIdentityInboundSamlSsoProfileSpConfig <a name="CloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig()
```


### CloudIdentityInboundSamlSsoProfileTimeouts <a name="CloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#create CloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#delete CloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_saml_sso_profile#update CloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">reset_change_password_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">reset_logout_redirect_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_password_uri` <a name="reset_change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```python
def reset_change_password_uri() -> None
```

##### `reset_logout_redirect_uri` <a name="reset_logout_redirect_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```python
def reset_logout_redirect_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">change_password_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logout_redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">single_sign_on_service_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">change_password_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logout_redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">single_sign_on_service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_password_uri_input`<sup>Optional</sup> <a name="change_password_uri_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```python
change_password_uri_input: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `logout_redirect_uri_input`<sup>Optional</sup> <a name="logout_redirect_uri_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```python
logout_redirect_uri_input: str
```

- *Type:* str

---

##### `single_sign_on_service_uri_input`<sup>Optional</sup> <a name="single_sign_on_service_uri_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```python
single_sign_on_service_uri_input: str
```

- *Type:* str

---

##### `change_password_uri`<sup>Required</sup> <a name="change_password_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```python
change_password_uri: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `logout_redirect_uri`<sup>Required</sup> <a name="logout_redirect_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```python
logout_redirect_uri: str
```

- *Type:* str

---

##### `single_sign_on_service_uri`<sup>Required</sup> <a name="single_sign_on_service_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```python
single_sign_on_service_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudIdentityInboundSamlSsoProfileIdpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileIdpConfig">CloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileSpConfigList <a name="CloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudIdentityInboundSamlSsoProfileSpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="CloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertion_consumer_service_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assertion_consumer_service_uri`<sup>Required</sup> <a name="assertion_consumer_service_uri" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```python
assertion_consumer_service_uri: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudIdentityInboundSamlSsoProfileSpConfig
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileSpConfig">CloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import cloud_identity_inbound_saml_sso_profile

cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudIdentityInboundSamlSsoProfileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudIdentityInboundSamlSsoProfile.CloudIdentityInboundSamlSsoProfileTimeouts">CloudIdentityInboundSamlSsoProfileTimeouts</a>

---




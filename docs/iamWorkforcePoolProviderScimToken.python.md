# `iamWorkforcePoolProviderScimToken` Submodule <a name="`iamWorkforcePoolProviderScimToken` Submodule" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderScimToken <a name="IamWorkforcePoolProviderScimToken" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token google_iam_workforce_pool_provider_scim_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  provider_id: str,
  scim_tenant_id: str,
  scim_token_id: str,
  workforce_pool_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamWorkforcePoolProviderScimTokenTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.providerId">provider_id</a></code> | <code>str</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scimTokenId">scim_token_id</a></code> | <code>str</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#location IamWorkforcePoolProviderScimToken#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.providerId"></a>

- *Type:* str

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#provider_id IamWorkforcePoolProviderScimToken#provider_id}

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scimTenantId"></a>

- *Type:* str

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_tenant_id IamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scim_token_id`<sup>Required</sup> <a name="scim_token_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.scimTokenId"></a>

- *Type:* str

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z](%5Ba-z0-9%5C-%5D%7B2,30%7D%5Ba-z0-9%5D))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_token_id IamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.workforcePoolId"></a>

- *Type:* str

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#workforce_pool_id IamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#deletion_policy IamWorkforcePoolProviderScimToken#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.displayName"></a>

- *Type:* str

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#display_name IamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#timeouts IamWorkforcePoolProviderScimToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IamWorkforcePoolProviderScimToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamWorkforcePoolProviderScimToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamWorkforcePoolProviderScimToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderScimToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput">scim_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput">scim_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput">workforce_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId">scim_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_token`<sup>Required</sup> <a name="security_token" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolProviderScimTokenTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference">IamWorkforcePoolProviderScimTokenTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `scim_tenant_id_input`<sup>Optional</sup> <a name="scim_tenant_id_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantIdInput"></a>

```python
scim_tenant_id_input: str
```

- *Type:* str

---

##### `scim_token_id_input`<sup>Optional</sup> <a name="scim_token_id_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenIdInput"></a>

```python
scim_token_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IamWorkforcePoolProviderScimTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---

##### `workforce_pool_id_input`<sup>Optional</sup> <a name="workforce_pool_id_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolIdInput"></a>

```python
workforce_pool_id_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTenantId"></a>

```python
scim_tenant_id: str
```

- *Type:* str

---

##### `scim_token_id`<sup>Required</sup> <a name="scim_token_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.scimTokenId"></a>

```python
scim_token_id: str
```

- *Type:* str

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderScimTokenConfig <a name="IamWorkforcePoolProviderScimTokenConfig" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.Initializer"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  provider_id: str,
  scim_tenant_id: str,
  scim_token_id: str,
  workforce_pool_id: str,
  deletion_policy: str = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamWorkforcePoolProviderScimTokenTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId">provider_id</a></code> | <code>str</code> | The ID of the Provider. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId">scim_tenant_id</a></code> | <code>str</code> | The ID of the SCIM Tenant. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId">scim_token_id</a></code> | <code>str</code> | The ID to use for the SCIM Token, which becomes the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId">workforce_pool_id</a></code> | <code>str</code> | The ID of the Workforce Pool. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName">display_name</a></code> | <code>str</code> | A user-specified display name for the scim token. Cannot exceed 32 characters. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#location IamWorkforcePoolProviderScimToken#location}

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

The ID of the Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#provider_id IamWorkforcePoolProviderScimToken#provider_id}

---

##### `scim_tenant_id`<sup>Required</sup> <a name="scim_tenant_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTenantId"></a>

```python
scim_tenant_id: str
```

- *Type:* str

The ID of the SCIM Tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_tenant_id IamWorkforcePoolProviderScimToken#scim_tenant_id}

---

##### `scim_token_id`<sup>Required</sup> <a name="scim_token_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.scimTokenId"></a>

```python
scim_token_id: str
```

- *Type:* str

The ID to use for the SCIM Token, which becomes the final component of the resource name.

This value should be 4-32 characters and follow the pattern: '([a-z](%5Ba-z0-9%5C-%5D%7B2,30%7D%5Ba-z0-9%5D))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#scim_token_id IamWorkforcePoolProviderScimToken#scim_token_id}

---

##### `workforce_pool_id`<sup>Required</sup> <a name="workforce_pool_id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.workforcePoolId"></a>

```python
workforce_pool_id: str
```

- *Type:* str

The ID of the Workforce Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#workforce_pool_id IamWorkforcePoolProviderScimToken#workforce_pool_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#deletion_policy IamWorkforcePoolProviderScimToken#deletion_policy}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-specified display name for the scim token. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#display_name IamWorkforcePoolProviderScimToken#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#id IamWorkforcePoolProviderScimToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenConfig.property.timeouts"></a>

```python
timeouts: IamWorkforcePoolProviderScimTokenTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#timeouts IamWorkforcePoolProviderScimToken#timeouts}

---

### IamWorkforcePoolProviderScimTokenTimeouts <a name="IamWorkforcePoolProviderScimTokenTimeouts" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.Initializer"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#create IamWorkforcePoolProviderScimToken#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#delete IamWorkforcePoolProviderScimToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/iam_workforce_pool_provider_scim_token#update IamWorkforcePoolProviderScimToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderScimTokenTimeoutsOutputReference <a name="IamWorkforcePoolProviderScimTokenTimeoutsOutputReference" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_workforce_pool_provider_scim_token

iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamWorkforcePoolProviderScimTokenTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamWorkforcePoolProviderScimToken.IamWorkforcePoolProviderScimTokenTimeouts">IamWorkforcePoolProviderScimTokenTimeouts</a>

---




# `dataGoogleIamWorkloadIdentityPoolJwks` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolJwks` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolJwks <a name="DataGoogleIamWorkloadIdentityPoolJwks" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks google_iam_workload_identity_pool_jwks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_name: str,
  id: str = None,
  timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.resourceName"></a>

- *Type:* str

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolJwks resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolJwks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIamWorkloadIdentityPoolJwks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolJwks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.keys"></a>

```python
keys: DataGoogleIamWorkloadIdentityPoolJwksKeysList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList">DataGoogleIamWorkloadIdentityPoolJwksKeysList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeouts"></a>

```python
timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference">DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataGoogleIamWorkloadIdentityPoolJwksTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolJwksConfig <a name="DataGoogleIamWorkloadIdentityPoolJwksConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_name: str,
  id: str = None,
  timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName">resource_name</a></code> | <code>str</code> | The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri). |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

The JWKS URI to retrieve the public keys from (e.g. from google_iam_workload_identity_pool_openid_config.jwks_uri).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#resource_name DataGoogleIamWorkloadIdentityPoolJwks#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#id DataGoogleIamWorkloadIdentityPoolJwks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksConfig.property.timeouts"></a>

```python
timeouts: DataGoogleIamWorkloadIdentityPoolJwksTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#timeouts DataGoogleIamWorkloadIdentityPoolJwks#timeouts}

---

### DataGoogleIamWorkloadIdentityPoolJwksKeys <a name="DataGoogleIamWorkloadIdentityPoolJwksKeys" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys()
```


### DataGoogleIamWorkloadIdentityPoolJwksTimeouts <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeouts" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/iam_workload_identity_pool_jwks#read DataGoogleIamWorkloadIdentityPoolJwks#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolJwksKeysList <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysList" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg">alg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e">e</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty">kty</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n">n</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use">use</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alg`<sup>Required</sup> <a name="alg" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.alg"></a>

```python
alg: str
```

- *Type:* str

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.e"></a>

```python
e: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.kty"></a>

```python
kty: str
```

- *Type:* str

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.n"></a>

```python
n: str
```

- *Type:* str

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.use"></a>

```python
use: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleIamWorkloadIdentityPoolJwksKeys
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksKeys">DataGoogleIamWorkloadIdentityPoolJwksKeys</a>

---


### DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_jwks

dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataGoogleIamWorkloadIdentityPoolJwksTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolJwks.DataGoogleIamWorkloadIdentityPoolJwksTimeouts">DataGoogleIamWorkloadIdentityPoolJwksTimeouts</a>

---




# `dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolOpenidConfig` Submodule" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config google_iam_workload_identity_pool_openid_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | The OIDC discovery URI. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.resourceName"></a>

- *Type:* str

The OIDC discovery URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#resource_name DataGoogleIamWorkloadIdentityPoolOpenidConfig#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleIamWorkloadIdentityPoolOpenidConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleIamWorkloadIdentityPoolOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported">id_token_signing_alg_values_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported">response_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported">subject_types_supported</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `id_token_signing_alg_values_supported`<sup>Required</sup> <a name="id_token_signing_alg_values_supported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```python
id_token_signing_alg_values_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `response_types_supported`<sup>Required</sup> <a name="response_types_supported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.responseTypesSupported"></a>

```python
response_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subject_types_supported`<sup>Required</sup> <a name="subject_types_supported" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.subjectTypesSupported"></a>

```python
subject_types_supported: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig <a name="DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_iam_workload_identity_pool_openid_config

dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName">resource_name</a></code> | <code>str</code> | The OIDC discovery URI. |
| <code><a href="#@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

The OIDC discovery URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#resource_name DataGoogleIamWorkloadIdentityPoolOpenidConfig#resource_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleIamWorkloadIdentityPoolOpenidConfig.DataGoogleIamWorkloadIdentityPoolOpenidConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/iam_workload_identity_pool_openid_config#id DataGoogleIamWorkloadIdentityPoolOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




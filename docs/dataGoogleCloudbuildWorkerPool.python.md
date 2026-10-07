# `dataGoogleCloudbuildWorkerPool` Submodule <a name="`dataGoogleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildWorkerPool <a name="DataGoogleCloudbuildWorkerPool" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool(
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
  name: str,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.name">name</a></code> | <code>str</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.name"></a>

- *Type:* str

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleCloudbuildWorkerPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig">network_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect">private_service_connect</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig">worker_config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig"></a>

```python
network_config: DataGoogleCloudbuildWorkerPoolNetworkConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a>

---

##### `private_service_connect`<sup>Required</sup> <a name="private_service_connect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```python
private_service_connect: DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `worker_config`<sup>Required</sup> <a name="worker_config" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig"></a>

```python
worker_config: DataGoogleCloudbuildWorkerPoolWorkerConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildWorkerPoolConfig <a name="DataGoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name">name</a></code> | <code>str</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

### DataGoogleCloudbuildWorkerPoolNetworkConfig <a name="DataGoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig()
```


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect()
```


### DataGoogleCloudbuildWorkerPoolWorkerConfig <a name="DataGoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildWorkerPoolNetworkConfigList <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">peered_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">peered_network_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `peered_network`<sup>Required</sup> <a name="peered_network" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```python
peered_network: str
```

- *Type:* str

---

##### `peered_network_ip_range`<sup>Required</sup> <a name="peered_network_ip_range" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```python
peered_network_ip_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudbuildWorkerPoolNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">route_all_traffic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `route_all_traffic`<sup>Required</sup> <a name="route_all_traffic" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```python
route_all_traffic: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudbuildWorkerPoolPrivateServiceConnect
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigList <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_cloudbuild_worker_pool

dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">enable_nested_virtualization</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">no_external_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_nested_virtualization`<sup>Required</sup> <a name="enable_nested_virtualization" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```python
enable_nested_virtualization: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `no_external_ip`<sup>Required</sup> <a name="no_external_ip" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```python
no_external_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleCloudbuildWorkerPoolWorkerConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a>

---




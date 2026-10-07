# `dataGoogleCloudbuildWorkerPool` Submodule <a name="`dataGoogleCloudbuildWorkerPool` Submodule" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudbuildWorkerPool <a name="DataGoogleCloudbuildWorkerPool" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool google_cloudbuild_worker_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPool(scope Construct, id *string, config DataGoogleCloudbuildWorkerPoolConfig) DataGoogleCloudbuildWorkerPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig">DataGoogleCloudbuildWorkerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPool_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleCloudbuildWorkerPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleCloudbuildWorkerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleCloudbuildWorkerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudbuildWorkerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations">Annotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect">PrivateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.networkConfig"></a>

```go
func NetworkConfig() DataGoogleCloudbuildWorkerPoolNetworkConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList">DataGoogleCloudbuildWorkerPoolNetworkConfigList</a>

---

##### `PrivateServiceConnect`<sup>Required</sup> <a name="PrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.privateServiceConnect"></a>

```go
func PrivateServiceConnect() DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList">DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.workerConfig"></a>

```go
func WorkerConfig() DataGoogleCloudbuildWorkerPoolWorkerConfigList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList">DataGoogleCloudbuildWorkerPoolWorkerConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudbuildWorkerPoolConfig <a name="DataGoogleCloudbuildWorkerPoolConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

&datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name">Name</a></code> | <code>*string</code> | User-defined name of the `WorkerPool`. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project">Project</a></code> | <code>*string</code> | The project for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#location DataGoogleCloudbuildWorkerPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-defined name of the `WorkerPool`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#name DataGoogleCloudbuildWorkerPool#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#id DataGoogleCloudbuildWorkerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/cloudbuild_worker_pool#project DataGoogleCloudbuildWorkerPool#project}

---

### DataGoogleCloudbuildWorkerPoolNetworkConfig <a name="DataGoogleCloudbuildWorkerPoolNetworkConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

&datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPoolNetworkConfig {

}
```


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnect <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnect" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

&datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect {

}
```


### DataGoogleCloudbuildWorkerPoolWorkerConfig <a name="DataGoogleCloudbuildWorkerPoolWorkerConfig" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

&datagooglecloudbuildworkerpool.DataGoogleCloudbuildWorkerPoolWorkerConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudbuildWorkerPoolNetworkConfigList <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolNetworkConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudbuildWorkerPoolNetworkConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get"></a>

```go
func Get(index *f64) DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork">PeeredNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange">PeeredNetworkIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeeredNetwork`<sup>Required</sup> <a name="PeeredNetwork" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetwork"></a>

```go
func PeeredNetwork() *string
```

- *Type:* *string

---

##### `PeeredNetworkIpRange`<sup>Required</sup> <a name="PeeredNetworkIpRange" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.peeredNetworkIpRange"></a>

```go
func PeeredNetworkIpRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudbuildWorkerPoolNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolNetworkConfig">DataGoogleCloudbuildWorkerPoolNetworkConfig</a>

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolPrivateServiceConnectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get"></a>

```go
func Get(index *f64) DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference <a name="DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic">RouteAllTraffic</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `RouteAllTraffic`<sup>Required</sup> <a name="RouteAllTraffic" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.routeAllTraffic"></a>

```go
func RouteAllTraffic() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudbuildWorkerPoolPrivateServiceConnect
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolPrivateServiceConnect">DataGoogleCloudbuildWorkerPoolPrivateServiceConnect</a>

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigList <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigList" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolWorkerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleCloudbuildWorkerPoolWorkerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get"></a>

```go
func Get(index *f64) DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference <a name="DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/datagooglecloudbuildworkerpool"

datagooglecloudbuildworkerpool.NewDataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp">NoExternalIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `NoExternalIp`<sup>Required</sup> <a name="NoExternalIp" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.noExternalIp"></a>

```go
func NoExternalIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleCloudbuildWorkerPoolWorkerConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudbuildWorkerPool.DataGoogleCloudbuildWorkerPoolWorkerConfig">DataGoogleCloudbuildWorkerPoolWorkerConfig</a>

---




# `dataGoogleComputeReservationBlock` Submodule <a name="`dataGoogleComputeReservationBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationBlock <a name="DataGoogleComputeReservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block google_compute_reservation_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlock(scope Construct, id *string, config DataGoogleComputeReservationBlockConfig) DataGoogleComputeReservationBlock
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig">DataGoogleComputeReservationBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig">DataGoogleComputeReservationBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.DataGoogleComputeReservationBlock_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.DataGoogleComputeReservationBlock_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.DataGoogleComputeReservationBlock_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.DataGoogleComputeReservationBlock_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeReservationBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeReservationBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeReservationBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.blockCount">BlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList">DataGoogleComputeReservationBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.inUseCount">InUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.physicalTopology">PhysicalTopology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList">DataGoogleComputeReservationBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationMaintenance">ReservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList">DataGoogleComputeReservationBlockReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockCount">ReservationSubBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockInUseCount">ReservationSubBlockInUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.subBlockNames">SubBlockNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationInput">ReservationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservation">Reservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BlockCount`<sup>Required</sup> <a name="BlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.blockCount"></a>

```go
func BlockCount() *f64
```

- *Type:* *f64

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.healthInfo"></a>

```go
func HealthInfo() DataGoogleComputeReservationBlockHealthInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList">DataGoogleComputeReservationBlockHealthInfoList</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.inUseCount"></a>

```go
func InUseCount() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `PhysicalTopology`<sup>Required</sup> <a name="PhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.physicalTopology"></a>

```go
func PhysicalTopology() DataGoogleComputeReservationBlockPhysicalTopologyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList">DataGoogleComputeReservationBlockPhysicalTopologyList</a>

---

##### `ReservationMaintenance`<sup>Required</sup> <a name="ReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationMaintenance"></a>

```go
func ReservationMaintenance() DataGoogleComputeReservationBlockReservationMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList">DataGoogleComputeReservationBlockReservationMaintenanceList</a>

---

##### `ReservationSubBlockCount`<sup>Required</sup> <a name="ReservationSubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockCount"></a>

```go
func ReservationSubBlockCount() *f64
```

- *Type:* *f64

---

##### `ReservationSubBlockInUseCount`<sup>Required</sup> <a name="ReservationSubBlockInUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationSubBlockInUseCount"></a>

```go
func ReservationSubBlockInUseCount() *f64
```

- *Type:* *f64

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubBlockNames`<sup>Required</sup> <a name="SubBlockNames" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.subBlockNames"></a>

```go
func SubBlockNames() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationInput`<sup>Optional</sup> <a name="ReservationInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservationInput"></a>

```go
func ReservationInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.reservation"></a>

```go
func Reservation() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlock.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationBlockConfig <a name="DataGoogleComputeReservationBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

&datagooglecomputereservationblock.DataGoogleComputeReservationBlockConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Reservation: *string,
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.name">Name</a></code> | <code>*string</code> | The name of the reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.reservation">Reservation</a></code> | <code>*string</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#id DataGoogleComputeReservationBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone where the reservation block resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#name DataGoogleComputeReservationBlock#name}

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.reservation"></a>

```go
Reservation *string
```

- *Type:* *string

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#reservation DataGoogleComputeReservationBlock#reservation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#id DataGoogleComputeReservationBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#project DataGoogleComputeReservationBlock#project}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone where the reservation block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/compute_reservation_block#zone DataGoogleComputeReservationBlock#zone}

---

### DataGoogleComputeReservationBlockHealthInfo <a name="DataGoogleComputeReservationBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

&datagooglecomputereservationblock.DataGoogleComputeReservationBlockHealthInfo {

}
```


### DataGoogleComputeReservationBlockPhysicalTopology <a name="DataGoogleComputeReservationBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

&datagooglecomputereservationblock.DataGoogleComputeReservationBlockPhysicalTopology {

}
```


### DataGoogleComputeReservationBlockReservationMaintenance <a name="DataGoogleComputeReservationBlockReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

&datagooglecomputereservationblock.DataGoogleComputeReservationBlockReservationMaintenance {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationBlockHealthInfoList <a name="DataGoogleComputeReservationBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockHealthInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationBlockHealthInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationBlockHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockHealthInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationBlockHealthInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.degradedSubBlockCount">DegradedSubBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthySubBlockCount">HealthySubBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo">DataGoogleComputeReservationBlockHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DegradedSubBlockCount`<sup>Required</sup> <a name="DegradedSubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.degradedSubBlockCount"></a>

```go
func DegradedSubBlockCount() *f64
```

- *Type:* *f64

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `HealthySubBlockCount`<sup>Required</sup> <a name="HealthySubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.healthySubBlockCount"></a>

```go
func HealthySubBlockCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationBlockHealthInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockHealthInfo">DataGoogleComputeReservationBlockHealthInfo</a>

---


### DataGoogleComputeReservationBlockPhysicalTopologyList <a name="DataGoogleComputeReservationBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockPhysicalTopologyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationBlockPhysicalTopologyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationBlockPhysicalTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockPhysicalTopologyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationBlockPhysicalTopologyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.block">Block</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology">DataGoogleComputeReservationBlockPhysicalTopology</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.block"></a>

```go
func Block() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationBlockPhysicalTopology
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockPhysicalTopology">DataGoogleComputeReservationBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationBlockReservationMaintenanceList <a name="DataGoogleComputeReservationBlockReservationMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockReservationMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationBlockReservationMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationBlockReservationMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationBlockReservationMaintenanceOutputReference <a name="DataGoogleComputeReservationBlockReservationMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/datagooglecomputereservationblock"

datagooglecomputereservationblock.NewDataGoogleComputeReservationBlockReservationMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationBlockReservationMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance">DataGoogleComputeReservationBlockReservationMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```go
func InstanceMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```go
func InstanceMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```go
func MaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```go
func MaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.schedulingType"></a>

```go
func SchedulingType() *string
```

- *Type:* *string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```go
func SubblockInfraMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```go
func SubblockInfraMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationBlockReservationMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationBlock.DataGoogleComputeReservationBlockReservationMaintenance">DataGoogleComputeReservationBlockReservationMaintenance</a>

---




# `dataGoogleComputeReservationSubBlock` Submodule <a name="`dataGoogleComputeReservationSubBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationSubBlock <a name="DataGoogleComputeReservationSubBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlock(scope Construct, id *string, config DataGoogleComputeReservationSubBlockConfig) DataGoogleComputeReservationSubBlock
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig">DataGoogleComputeReservationSubBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig">DataGoogleComputeReservationSubBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlock_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlock_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlock_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlock_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeReservationSubBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeReservationSubBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationSubBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount">InUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology">PhysicalTopology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance">ReservationSubBlockMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount">SubBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput">ReservationBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput">ReservationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation">Reservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock">ReservationBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo"></a>

```go
func HealthInfo() DataGoogleComputeReservationSubBlockHealthInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount"></a>

```go
func InUseCount() *f64
```

- *Type:* *f64

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `PhysicalTopology`<sup>Required</sup> <a name="PhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology"></a>

```go
func PhysicalTopology() DataGoogleComputeReservationSubBlockPhysicalTopologyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a>

---

##### `ReservationSubBlockMaintenance`<sup>Required</sup> <a name="ReservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance"></a>

```go
func ReservationSubBlockMaintenance() DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId"></a>

```go
func SelfLinkWithId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubBlockCount`<sup>Required</sup> <a name="SubBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount"></a>

```go
func SubBlockCount() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReservationBlockInput`<sup>Optional</sup> <a name="ReservationBlockInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput"></a>

```go
func ReservationBlockInput() *string
```

- *Type:* *string

---

##### `ReservationInput`<sup>Optional</sup> <a name="ReservationInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput"></a>

```go
func ReservationInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation"></a>

```go
func Reservation() *string
```

- *Type:* *string

---

##### `ReservationBlock`<sup>Required</sup> <a name="ReservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock"></a>

```go
func ReservationBlock() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationSubBlockConfig <a name="DataGoogleComputeReservationSubBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

&datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlockConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Reservation: *string,
	ReservationBlock: *string,
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name">Name</a></code> | <code>*string</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation">Reservation</a></code> | <code>*string</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock">ReservationBlock</a></code> | <code>*string</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project">Project</a></code> | <code>*string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone where the reservation sub-block resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `Reservation`<sup>Required</sup> <a name="Reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation"></a>

```go
Reservation *string
```

- *Type:* *string

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `ReservationBlock`<sup>Required</sup> <a name="ReservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock"></a>

```go
ReservationBlock *string
```

- *Type:* *string

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

### DataGoogleComputeReservationSubBlockHealthInfo <a name="DataGoogleComputeReservationSubBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

&datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlockHealthInfo {

}
```


### DataGoogleComputeReservationSubBlockPhysicalTopology <a name="DataGoogleComputeReservationSubBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

&datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlockPhysicalTopology {

}
```


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

&datagooglecomputereservationsubblock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationSubBlockHealthInfoList <a name="DataGoogleComputeReservationSubBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockHealthInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSubBlockHealthInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSubBlockHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSubBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationSubBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockHealthInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSubBlockHealthInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount">DegradedHostCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount">DegradedInfraCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount">HealthyHostCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount">HealthyInfraCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DegradedHostCount`<sup>Required</sup> <a name="DegradedHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount"></a>

```go
func DegradedHostCount() *f64
```

- *Type:* *f64

---

##### `DegradedInfraCount`<sup>Required</sup> <a name="DegradedInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount"></a>

```go
func DegradedInfraCount() *f64
```

- *Type:* *f64

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `HealthyHostCount`<sup>Required</sup> <a name="HealthyHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount"></a>

```go
func HealthyHostCount() *f64
```

- *Type:* *f64

---

##### `HealthyInfraCount`<sup>Required</sup> <a name="HealthyInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount"></a>

```go
func HealthyInfraCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSubBlockHealthInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a>

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyList <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockPhysicalTopologyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSubBlockPhysicalTopologyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block">Block</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock">SubBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block"></a>

```go
func Block() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `SubBlock`<sup>Required</sup> <a name="SubBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock"></a>

```go
func SubBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSubBlockPhysicalTopology
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservationsubblock"

datagooglecomputereservationsubblock.NewDataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```go
func InstanceMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```go
func InstanceMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```go
func MaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount"></a>

```go
func MaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType"></a>

```go
func SchedulingType() *string
```

- *Type:* *string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```go
func SubblockInfraMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```go
func SubblockInfraMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a>

---




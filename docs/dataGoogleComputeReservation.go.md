# `dataGoogleComputeReservation` Submodule <a name="`dataGoogleComputeReservation` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservation <a name="DataGoogleComputeReservation" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation google_compute_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservation(scope Construct, id *string, config DataGoogleComputeReservationConfig) DataGoogleComputeReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig">DataGoogleComputeReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig">DataGoogleComputeReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.DataGoogleComputeReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.DataGoogleComputeReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.DataGoogleComputeReservation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.DataGoogleComputeReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataGoogleComputeReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.blockNames">BlockNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.commitment">Commitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deleteAfterDuration">DeleteAfterDuration</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList">DataGoogleComputeReservationDeleteAfterDurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deleteAtTime">DeleteAtTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.linkedCommitments">LinkedCommitments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList">DataGoogleComputeReservationParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.reservationSharingPolicy">ReservationSharingPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList">DataGoogleComputeReservationReservationSharingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.resourceStatus">ResourceStatus</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList">DataGoogleComputeReservationResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList">DataGoogleComputeReservationShareSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList">DataGoogleComputeReservationSpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.specificReservationRequired">SpecificReservationRequired</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BlockNames`<sup>Required</sup> <a name="BlockNames" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.blockNames"></a>

```go
func BlockNames() *[]*string
```

- *Type:* *[]*string

---

##### `Commitment`<sup>Required</sup> <a name="Commitment" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.commitment"></a>

```go
func Commitment() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `DeleteAfterDuration`<sup>Required</sup> <a name="DeleteAfterDuration" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deleteAfterDuration"></a>

```go
func DeleteAfterDuration() DataGoogleComputeReservationDeleteAfterDurationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList">DataGoogleComputeReservationDeleteAfterDurationList</a>

---

##### `DeleteAtTime`<sup>Required</sup> <a name="DeleteAtTime" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deleteAtTime"></a>

```go
func DeleteAtTime() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `LinkedCommitments`<sup>Required</sup> <a name="LinkedCommitments" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.linkedCommitments"></a>

```go
func LinkedCommitments() *[]*string
```

- *Type:* *[]*string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.params"></a>

```go
func Params() DataGoogleComputeReservationParamsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList">DataGoogleComputeReservationParamsList</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.reservationBlockCount"></a>

```go
func ReservationBlockCount() *f64
```

- *Type:* *f64

---

##### `ReservationSharingPolicy`<sup>Required</sup> <a name="ReservationSharingPolicy" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.reservationSharingPolicy"></a>

```go
func ReservationSharingPolicy() DataGoogleComputeReservationReservationSharingPolicyList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList">DataGoogleComputeReservationReservationSharingPolicyList</a>

---

##### `ResourceStatus`<sup>Required</sup> <a name="ResourceStatus" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.resourceStatus"></a>

```go
func ResourceStatus() DataGoogleComputeReservationResourceStatusList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList">DataGoogleComputeReservationResourceStatusList</a>

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.shareSettings"></a>

```go
func ShareSettings() DataGoogleComputeReservationShareSettingsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList">DataGoogleComputeReservationShareSettingsList</a>

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.specificReservation"></a>

```go
func SpecificReservation() DataGoogleComputeReservationSpecificReservationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList">DataGoogleComputeReservationSpecificReservationList</a>

---

##### `SpecificReservationRequired`<sup>Required</sup> <a name="SpecificReservationRequired" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.specificReservationRequired"></a>

```go
func SpecificReservationRequired() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationConfig <a name="DataGoogleComputeReservationConfig" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Zone: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.zone">Zone</a></code> | <code>*string</code> | The zone where the reservation is made. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation#project DataGoogleComputeReservation#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation#name DataGoogleComputeReservation#name}

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

The zone where the reservation is made.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation#zone DataGoogleComputeReservation#zone}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/compute_reservation#project DataGoogleComputeReservation#project}.

---

### DataGoogleComputeReservationDeleteAfterDuration <a name="DataGoogleComputeReservationDeleteAfterDuration" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationDeleteAfterDuration {

}
```


### DataGoogleComputeReservationParams <a name="DataGoogleComputeReservationParams" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationParams {

}
```


### DataGoogleComputeReservationReservationSharingPolicy <a name="DataGoogleComputeReservationReservationSharingPolicy" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationReservationSharingPolicy {

}
```


### DataGoogleComputeReservationResourceStatus <a name="DataGoogleComputeReservationResourceStatus" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationResourceStatus {

}
```


### DataGoogleComputeReservationResourceStatusHealthInfo <a name="DataGoogleComputeReservationResourceStatusHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationResourceStatusHealthInfo {

}
```


### DataGoogleComputeReservationResourceStatusReservationMaintenance <a name="DataGoogleComputeReservationResourceStatusReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationResourceStatusReservationMaintenance {

}
```


### DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance <a name="DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance {

}
```


### DataGoogleComputeReservationResourceStatusSpecificSkuAllocation <a name="DataGoogleComputeReservationResourceStatusSpecificSkuAllocation" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocation {

}
```


### DataGoogleComputeReservationShareSettings <a name="DataGoogleComputeReservationShareSettings" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationShareSettings {

}
```


### DataGoogleComputeReservationShareSettingsProjectMap <a name="DataGoogleComputeReservationShareSettingsProjectMap" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationShareSettingsProjectMap {

}
```


### DataGoogleComputeReservationSpecificReservation <a name="DataGoogleComputeReservationSpecificReservation" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationSpecificReservation {

}
```


### DataGoogleComputeReservationSpecificReservationInstanceProperties <a name="DataGoogleComputeReservationSpecificReservationInstanceProperties" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstanceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstanceProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationSpecificReservationInstanceProperties {

}
```


### DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators {

}
```


### DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

&datagooglecomputereservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationDeleteAfterDurationList <a name="DataGoogleComputeReservationDeleteAfterDurationList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationDeleteAfterDurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationDeleteAfterDurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationDeleteAfterDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationDeleteAfterDurationOutputReference <a name="DataGoogleComputeReservationDeleteAfterDurationOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationDeleteAfterDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationDeleteAfterDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.seconds">Seconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDuration">DataGoogleComputeReservationDeleteAfterDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.seconds"></a>

```go
func Seconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationDeleteAfterDuration
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationDeleteAfterDuration">DataGoogleComputeReservationDeleteAfterDuration</a>

---


### DataGoogleComputeReservationParamsList <a name="DataGoogleComputeReservationParamsList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationParamsOutputReference <a name="DataGoogleComputeReservationParamsOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParams">DataGoogleComputeReservationParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationParams
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationParams">DataGoogleComputeReservationParams</a>

---


### DataGoogleComputeReservationReservationSharingPolicyList <a name="DataGoogleComputeReservationReservationSharingPolicyList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationReservationSharingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationReservationSharingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationReservationSharingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationReservationSharingPolicyOutputReference <a name="DataGoogleComputeReservationReservationSharingPolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationReservationSharingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationReservationSharingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType">ServiceShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicy">DataGoogleComputeReservationReservationSharingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceShareType`<sup>Required</sup> <a name="ServiceShareType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.serviceShareType"></a>

```go
func ServiceShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationReservationSharingPolicy
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationReservationSharingPolicy">DataGoogleComputeReservationReservationSharingPolicy</a>

---


### DataGoogleComputeReservationResourceStatusHealthInfoList <a name="DataGoogleComputeReservationResourceStatusHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusHealthInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationResourceStatusHealthInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationResourceStatusHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationResourceStatusHealthInfoOutputReference <a name="DataGoogleComputeReservationResourceStatusHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusHealthInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationResourceStatusHealthInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount">DegradedBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount">HealthyBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfo">DataGoogleComputeReservationResourceStatusHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DegradedBlockCount`<sup>Required</sup> <a name="DegradedBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.degradedBlockCount"></a>

```go
func DegradedBlockCount() *f64
```

- *Type:* *f64

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `HealthyBlockCount`<sup>Required</sup> <a name="HealthyBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.healthyBlockCount"></a>

```go
func HealthyBlockCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationResourceStatusHealthInfo
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfo">DataGoogleComputeReservationResourceStatusHealthInfo</a>

---


### DataGoogleComputeReservationResourceStatusList <a name="DataGoogleComputeReservationResourceStatusList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationResourceStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationResourceStatusOutputReference <a name="DataGoogleComputeReservationResourceStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationResourceStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList">DataGoogleComputeReservationResourceStatusHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.reservationBlockCount">ReservationBlockCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.reservationMaintenance">ReservationMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList">DataGoogleComputeReservationResourceStatusReservationMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.specificSkuAllocation">SpecificSkuAllocation</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList">DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatus">DataGoogleComputeReservationResourceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.healthInfo"></a>

```go
func HealthInfo() DataGoogleComputeReservationResourceStatusHealthInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusHealthInfoList">DataGoogleComputeReservationResourceStatusHealthInfoList</a>

---

##### `ReservationBlockCount`<sup>Required</sup> <a name="ReservationBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.reservationBlockCount"></a>

```go
func ReservationBlockCount() *f64
```

- *Type:* *f64

---

##### `ReservationMaintenance`<sup>Required</sup> <a name="ReservationMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.reservationMaintenance"></a>

```go
func ReservationMaintenance() DataGoogleComputeReservationResourceStatusReservationMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList">DataGoogleComputeReservationResourceStatusReservationMaintenanceList</a>

---

##### `SpecificSkuAllocation`<sup>Required</sup> <a name="SpecificSkuAllocation" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.specificSkuAllocation"></a>

```go
func SpecificSkuAllocation() DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList">DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationResourceStatus
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatus">DataGoogleComputeReservationResourceStatus</a>

---


### DataGoogleComputeReservationResourceStatusReservationMaintenanceList <a name="DataGoogleComputeReservationResourceStatusReservationMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusReservationMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationResourceStatusReservationMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference <a name="DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">InstanceMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount">InstanceMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount">MaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount">MaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType">SchedulingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">SubblockInfraMaintenanceOngoingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">SubblockInfraMaintenancePendingCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance">UpcomingGroupMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenance">DataGoogleComputeReservationResourceStatusReservationMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceOngoingCount`<sup>Required</sup> <a name="InstanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```go
func InstanceMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `InstanceMaintenancePendingCount`<sup>Required</sup> <a name="InstanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```go
func InstanceMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `MaintenanceOngoingCount`<sup>Required</sup> <a name="MaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```go
func MaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `MaintenancePendingCount`<sup>Required</sup> <a name="MaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.maintenancePendingCount"></a>

```go
func MaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `SchedulingType`<sup>Required</sup> <a name="SchedulingType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.schedulingType"></a>

```go
func SchedulingType() *string
```

- *Type:* *string

---

##### `SubblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="SubblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```go
func SubblockInfraMaintenanceOngoingCount() *f64
```

- *Type:* *f64

---

##### `SubblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="SubblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```go
func SubblockInfraMaintenancePendingCount() *f64
```

- *Type:* *f64

---

##### `UpcomingGroupMaintenance`<sup>Required</sup> <a name="UpcomingGroupMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.upcomingGroupMaintenance"></a>

```go
func UpcomingGroupMaintenance() DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList">DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationResourceStatusReservationMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenance">DataGoogleComputeReservationResourceStatusReservationMaintenance</a>

---


### DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList <a name="DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference <a name="DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule">CanReschedule</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime">LatestWindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown">MaintenanceOnShutdown</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons">MaintenanceReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus">MaintenanceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime">WindowEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.canReschedule"></a>

```go
func CanReschedule() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LatestWindowStartTime`<sup>Required</sup> <a name="LatestWindowStartTime" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.latestWindowStartTime"></a>

```go
func LatestWindowStartTime() *string
```

- *Type:* *string

---

##### `MaintenanceOnShutdown`<sup>Required</sup> <a name="MaintenanceOnShutdown" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceOnShutdown"></a>

```go
func MaintenanceOnShutdown() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MaintenanceReasons`<sup>Required</sup> <a name="MaintenanceReasons" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceReasons"></a>

```go
func MaintenanceReasons() *[]*string
```

- *Type:* *[]*string

---

##### `MaintenanceStatus`<sup>Required</sup> <a name="MaintenanceStatus" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.maintenanceStatus"></a>

```go
func MaintenanceStatus() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WindowEndTime`<sup>Required</sup> <a name="WindowEndTime" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowEndTime"></a>

```go
func WindowEndTime() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance">DataGoogleComputeReservationResourceStatusReservationMaintenanceUpcomingGroupMaintenance</a>

---


### DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList <a name="DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusSpecificSkuAllocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference <a name="DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId">SourceInstanceTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations">Utilizations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocation">DataGoogleComputeReservationResourceStatusSpecificSkuAllocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInstanceTemplateId`<sup>Required</sup> <a name="SourceInstanceTemplateId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.sourceInstanceTemplateId"></a>

```go
func SourceInstanceTemplateId() *string
```

- *Type:* *string

---

##### `Utilizations`<sup>Required</sup> <a name="Utilizations" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.utilizations"></a>

```go
func Utilizations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationResourceStatusSpecificSkuAllocation
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationResourceStatusSpecificSkuAllocation">DataGoogleComputeReservationResourceStatusSpecificSkuAllocation</a>

---


### DataGoogleComputeReservationShareSettingsList <a name="DataGoogleComputeReservationShareSettingsList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationShareSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationShareSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationShareSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationShareSettingsOutputReference <a name="DataGoogleComputeReservationShareSettingsOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationShareSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationShareSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList">DataGoogleComputeReservationShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettings">DataGoogleComputeReservationShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.projectMap"></a>

```go
func ProjectMap() DataGoogleComputeReservationShareSettingsProjectMapList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList">DataGoogleComputeReservationShareSettingsProjectMapList</a>

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationShareSettings
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettings">DataGoogleComputeReservationShareSettings</a>

---


### DataGoogleComputeReservationShareSettingsProjectMapList <a name="DataGoogleComputeReservationShareSettingsProjectMapList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationShareSettingsProjectMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationShareSettingsProjectMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationShareSettingsProjectMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationShareSettingsProjectMapOutputReference <a name="DataGoogleComputeReservationShareSettingsProjectMapOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationShareSettingsProjectMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationShareSettingsProjectMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMap">DataGoogleComputeReservationShareSettingsProjectMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationShareSettingsProjectMap
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationShareSettingsProjectMap">DataGoogleComputeReservationShareSettingsProjectMap</a>

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators">DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAccelerators</a>

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesList <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds">DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds">DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsds</a>

---


### DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference <a name="DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators">GuestAccelerators</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds">LocalSsds</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint">LocationHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstanceProperties">DataGoogleComputeReservationSpecificReservationInstanceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GuestAccelerators`<sup>Required</sup> <a name="GuestAccelerators" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.guestAccelerators"></a>

```go
func GuestAccelerators() DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList">DataGoogleComputeReservationSpecificReservationInstancePropertiesGuestAcceleratorsList</a>

---

##### `LocalSsds`<sup>Required</sup> <a name="LocalSsds" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.localSsds"></a>

```go
func LocalSsds() DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList">DataGoogleComputeReservationSpecificReservationInstancePropertiesLocalSsdsList</a>

---

##### `LocationHint`<sup>Required</sup> <a name="LocationHint" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.locationHint"></a>

```go
func LocationHint() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSpecificReservationInstanceProperties
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstanceProperties">DataGoogleComputeReservationSpecificReservationInstanceProperties</a>

---


### DataGoogleComputeReservationSpecificReservationList <a name="DataGoogleComputeReservationSpecificReservationList" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeReservationSpecificReservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeReservationSpecificReservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeReservationSpecificReservationOutputReference <a name="DataGoogleComputeReservationSpecificReservationOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/datagooglecomputereservation"

datagooglecomputereservation.NewDataGoogleComputeReservationSpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeReservationSpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.assuredCount">AssuredCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.instanceProperties">InstanceProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList">DataGoogleComputeReservationSpecificReservationInstancePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.inUseCount">InUseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate">SourceInstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservation">DataGoogleComputeReservationSpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssuredCount`<sup>Required</sup> <a name="AssuredCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.assuredCount"></a>

```go
func AssuredCount() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InstanceProperties`<sup>Required</sup> <a name="InstanceProperties" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.instanceProperties"></a>

```go
func InstanceProperties() DataGoogleComputeReservationSpecificReservationInstancePropertiesList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationInstancePropertiesList">DataGoogleComputeReservationSpecificReservationInstancePropertiesList</a>

---

##### `InUseCount`<sup>Required</sup> <a name="InUseCount" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.inUseCount"></a>

```go
func InUseCount() *f64
```

- *Type:* *f64

---

##### `SourceInstanceTemplate`<sup>Required</sup> <a name="SourceInstanceTemplate" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.sourceInstanceTemplate"></a>

```go
func SourceInstanceTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeReservationSpecificReservation
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservation.DataGoogleComputeReservationSpecificReservation">DataGoogleComputeReservationSpecificReservation</a>

---




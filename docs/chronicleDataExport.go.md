# `chronicleDataExport` Submodule <a name="`chronicleDataExport` Submodule" id="@cdktn/provider-google.chronicleDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataExport <a name="ChronicleDataExport" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export google_chronicle_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExport(scope Construct, id *string, config ChronicleDataExportConfig) ChronicleDataExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig">ChronicleDataExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig">ChronicleDataExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putIngestionLabels">PutIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetIncludeLogTypes">ResetIncludeLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetIngestionLabels">ResetIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIngestionLabels` <a name="PutIngestionLabels" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putIngestionLabels"></a>

```go
func PutIngestionLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putIngestionLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleDataExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts">ChronicleDataExportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeLogTypes` <a name="ResetIncludeLogTypes" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetIncludeLogTypes"></a>

```go
func ResetIncludeLogTypes()
```

##### `ResetIngestionLabels` <a name="ResetIngestionLabels" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetIngestionLabels"></a>

```go
func ResetIngestionLabels()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetNamespaces"></a>

```go
func ResetNamespaces()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.ChronicleDataExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.ChronicleDataExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.ChronicleDataExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.ChronicleDataExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dataExportId">DataExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dataExportStatus">DataExportStatus</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList">ChronicleDataExportDataExportStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.estimatedVolume">EstimatedVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.exportedVolume">ExportedVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.ingestionLabels">IngestionLabels</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList">ChronicleDataExportIngestionLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference">ChronicleDataExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.gcsBucketInput">GcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.includeLogTypesInput">IncludeLogTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.ingestionLabelsInput">IngestionLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.includeLogTypes">IncludeLogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataExportId`<sup>Required</sup> <a name="DataExportId" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dataExportId"></a>

```go
func DataExportId() *string
```

- *Type:* *string

---

##### `DataExportStatus`<sup>Required</sup> <a name="DataExportStatus" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.dataExportStatus"></a>

```go
func DataExportStatus() ChronicleDataExportDataExportStatusList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList">ChronicleDataExportDataExportStatusList</a>

---

##### `EstimatedVolume`<sup>Required</sup> <a name="EstimatedVolume" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.estimatedVolume"></a>

```go
func EstimatedVolume() *f64
```

- *Type:* *f64

---

##### `ExportedVolume`<sup>Required</sup> <a name="ExportedVolume" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.exportedVolume"></a>

```go
func ExportedVolume() *f64
```

- *Type:* *f64

---

##### `IngestionLabels`<sup>Required</sup> <a name="IngestionLabels" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.ingestionLabels"></a>

```go
func IngestionLabels() ChronicleDataExportIngestionLabelsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList">ChronicleDataExportIngestionLabelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.timeouts"></a>

```go
func Timeouts() ChronicleDataExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference">ChronicleDataExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.gcsBucketInput"></a>

```go
func GcsBucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeLogTypesInput`<sup>Optional</sup> <a name="IncludeLogTypesInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.includeLogTypesInput"></a>

```go
func IncludeLogTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IngestionLabelsInput`<sup>Optional</sup> <a name="IngestionLabelsInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.ingestionLabelsInput"></a>

```go
func IngestionLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeLogTypes`<sup>Required</sup> <a name="IncludeLogTypes" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.includeLogTypes"></a>

```go
func IncludeLogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataExportConfig <a name="ChronicleDataExportConfig" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

&chronicledataexport.ChronicleDataExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndTime: *string,
	GcsBucket: *string,
	Instance: *string,
	Location: *string,
	StartTime: *string,
	Id: *string,
	IncludeLogTypes: *[]*string,
	IngestionLabels: interface{},
	Namespaces: *[]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.chronicleDataExport.ChronicleDataExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Last, exclusive time from the range. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | Link to the destination Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Start, inclusive time from the range. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#id ChronicleDataExport#id}. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.includeLogTypes">IncludeLogTypes</a></code> | <code>*[]*string</code> | The specific log types to include in the Data Export request. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.ingestionLabels">IngestionLabels</a></code> | <code>interface{}</code> | ingestion_labels block. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | The namespaces used to filter the export. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#project ChronicleDataExport#project}. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts">ChronicleDataExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Last, exclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#end_time ChronicleDataExport#end_time}

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.gcsBucket"></a>

```go
GcsBucket *string
```

- *Type:* *string

Link to the destination Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#gcs_bucket ChronicleDataExport#gcs_bucket}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#instance ChronicleDataExport#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#location ChronicleDataExport#location}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start, inclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#start_time ChronicleDataExport#start_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#id ChronicleDataExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeLogTypes`<sup>Optional</sup> <a name="IncludeLogTypes" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.includeLogTypes"></a>

```go
IncludeLogTypes *[]*string
```

- *Type:* *[]*string

The specific log types to include in the Data Export request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#include_log_types ChronicleDataExport#include_log_types}

---

##### `IngestionLabels`<sup>Optional</sup> <a name="IngestionLabels" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.ingestionLabels"></a>

```go
IngestionLabels interface{}
```

- *Type:* interface{}

ingestion_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#ingestion_labels ChronicleDataExport#ingestion_labels}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

The namespaces used to filter the export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#namespaces ChronicleDataExport#namespaces}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#project ChronicleDataExport#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportConfig.property.timeouts"></a>

```go
Timeouts ChronicleDataExportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts">ChronicleDataExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#timeouts ChronicleDataExport#timeouts}

---

### ChronicleDataExportDataExportStatus <a name="ChronicleDataExportDataExportStatus" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

&chronicledataexport.ChronicleDataExportDataExportStatus {

}
```


### ChronicleDataExportIngestionLabels <a name="ChronicleDataExportIngestionLabels" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

&chronicledataexport.ChronicleDataExportIngestionLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels.property.key">Key</a></code> | <code>*string</code> | The key. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels.property.value">Value</a></code> | <code>*string</code> | The value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#key ChronicleDataExport#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#value ChronicleDataExport#value}

---

### ChronicleDataExportTimeouts <a name="ChronicleDataExportTimeouts" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

&chronicledataexport.ChronicleDataExportTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#create ChronicleDataExport#create}. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#delete ChronicleDataExport#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#create ChronicleDataExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_data_export#delete ChronicleDataExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataExportDataExportStatusList <a name="ChronicleDataExportDataExportStatusList" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExportDataExportStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleDataExportDataExportStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.get"></a>

```go
func Get(index *f64) ChronicleDataExportDataExportStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleDataExportDataExportStatusOutputReference <a name="ChronicleDataExportDataExportStatusOutputReference" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExportDataExportStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleDataExportDataExportStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered">DataRbacFiltered</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns">ExportedGlobPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatus">ChronicleDataExportDataExportStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataRbacFiltered`<sup>Required</sup> <a name="DataRbacFiltered" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered"></a>

```go
func DataRbacFiltered() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `ExportedGlobPatterns`<sup>Required</sup> <a name="ExportedGlobPatterns" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns"></a>

```go
func ExportedGlobPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleDataExportDataExportStatus
```

- *Type:* <a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportDataExportStatus">ChronicleDataExportDataExportStatus</a>

---


### ChronicleDataExportIngestionLabelsList <a name="ChronicleDataExportIngestionLabelsList" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExportIngestionLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleDataExportIngestionLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.get"></a>

```go
func Get(index *f64) ChronicleDataExportIngestionLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleDataExportIngestionLabelsOutputReference <a name="ChronicleDataExportIngestionLabelsOutputReference" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExportIngestionLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleDataExportIngestionLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportIngestionLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleDataExportTimeoutsOutputReference <a name="ChronicleDataExportTimeoutsOutputReference" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chronicledataexport"

chronicledataexport.NewChronicleDataExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleDataExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleDataExport.ChronicleDataExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




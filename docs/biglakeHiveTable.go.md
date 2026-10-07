# `biglakeHiveTable` Submodule <a name="`biglakeHiveTable` Submodule" id="@cdktn/provider-google.biglakeHiveTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeHiveTable <a name="BiglakeHiveTable" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table google_biglake_hive_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTable(scope Construct, id *string, config BiglakeHiveTableConfig) BiglakeHiveTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig">BiglakeHiveTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys">PutPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys">ResetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText">ResetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText">ResetViewOriginalText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionKeys` <a name="PutPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys"></a>

```go
func PutPartitionKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putPartitionKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor"></a>

```go
func PutStorageDescriptor(value BiglakeHiveTableStorageDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts"></a>

```go
func PutTimeouts(value BiglakeHiveTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetId"></a>

```go
func ResetId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPartitionKeys` <a name="ResetPartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetPartitionKeys"></a>

```go
func ResetPartitionKeys()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetViewExpandedText` <a name="ResetViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewExpandedText"></a>

```go
func ResetViewExpandedText()
```

##### `ResetViewOriginalText` <a name="ResetViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.resetViewOriginalText"></a>

```go
func ResetViewOriginalText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.BiglakeHiveTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.BiglakeHiveTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.BiglakeHiveTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.BiglakeHiveTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BiglakeHiveTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BiglakeHiveTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BiglakeHiveTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeHiveTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime">LastAccessTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys">PartitionKeys</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput">PartitionKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput">ViewExpandedTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput">ViewOriginalTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `LastAccessTime`<sup>Required</sup> <a name="LastAccessTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.lastAccessTime"></a>

```go
func LastAccessTime() *string
```

- *Type:* *string

---

##### `PartitionKeys`<sup>Required</sup> <a name="PartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeys"></a>

```go
func PartitionKeys() BiglakeHiveTablePartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList">BiglakeHiveTablePartitionKeysList</a>

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptor"></a>

```go
func StorageDescriptor() BiglakeHiveTableStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference">BiglakeHiveTableStorageDescriptorOutputReference</a>

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeouts"></a>

```go
func Timeouts() BiglakeHiveTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference">BiglakeHiveTableTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PartitionKeysInput`<sup>Optional</sup> <a name="PartitionKeysInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.partitionKeysInput"></a>

```go
func PartitionKeysInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.storageDescriptorInput"></a>

```go
func StorageDescriptorInput() BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ViewExpandedTextInput`<sup>Optional</sup> <a name="ViewExpandedTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedTextInput"></a>

```go
func ViewExpandedTextInput() *string
```

- *Type:* *string

---

##### `ViewOriginalTextInput`<sup>Optional</sup> <a name="ViewOriginalTextInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalTextInput"></a>

```go
func ViewOriginalTextInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ViewExpandedText`<sup>Required</sup> <a name="ViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewExpandedText"></a>

```go
func ViewExpandedText() *string
```

- *Type:* *string

---

##### `ViewOriginalText`<sup>Required</sup> <a name="ViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.viewOriginalText"></a>

```go
func ViewOriginalText() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeHiveTableConfig <a name="BiglakeHiveTableConfig" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	Database: *string,
	Name: *string,
	StorageDescriptor: github.com/cdktn-io/cdktn-provider-google-go/google/v21.biglakeHiveTable.BiglakeHiveTableStorageDescriptor,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Parameters: *map[string]*string,
	PartitionKeys: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v21.biglakeHiveTable.BiglakeHiveTableTimeouts,
	ViewExpandedText: *string,
	ViewOriginalText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The Hive catalog where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database">Database</a></code> | <code>*string</code> | The Hive database where the table is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name">Name</a></code> | <code>*string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description">Description</a></code> | <code>*string</code> | Description of the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Additional parameters associated with the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys">PartitionKeys</a></code> | <code>interface{}</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText">ViewExpandedText</a></code> | <code>*string</code> | Expanded view text for Hive views. Empty for non-view. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText">ViewOriginalText</a></code> | <code>*string</code> | Original view text for Hive views. Empty for non-view. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The Hive catalog where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#catalog BiglakeHiveTable#catalog}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The Hive database where the table is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#database BiglakeHiveTable#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.storageDescriptor"></a>

```go
StorageDescriptor BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#storage_descriptor BiglakeHiveTable#storage_descriptor}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deletion_policy BiglakeHiveTable#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#id BiglakeHiveTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Additional parameters associated with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `PartitionKeys`<sup>Optional</sup> <a name="PartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.partitionKeys"></a>

```go
PartitionKeys interface{}
```

- *Type:* interface{}

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#partition_keys BiglakeHiveTable#partition_keys}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#project BiglakeHiveTable#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.timeouts"></a>

```go
Timeouts BiglakeHiveTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts">BiglakeHiveTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#timeouts BiglakeHiveTable#timeouts}

---

##### `ViewExpandedText`<sup>Optional</sup> <a name="ViewExpandedText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewExpandedText"></a>

```go
ViewExpandedText *string
```

- *Type:* *string

Expanded view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_expanded_text BiglakeHiveTable#view_expanded_text}

---

##### `ViewOriginalText`<sup>Optional</sup> <a name="ViewOriginalText" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableConfig.property.viewOriginalText"></a>

```go
ViewOriginalText *string
```

- *Type:* *string

Original view text for Hive views. Empty for non-view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#view_original_text BiglakeHiveTable#view_original_text}

---

### BiglakeHiveTablePartitionKeys <a name="BiglakeHiveTablePartitionKeys" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTablePartitionKeys {
	Name: *string,
	Type: *string,
	Comment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name">Name</a></code> | <code>*string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type">Type</a></code> | <code>*string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment">Comment</a></code> | <code>*string</code> | Comment of the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeys.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptor <a name="BiglakeHiveTableStorageDescriptor" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptor {
	Columns: interface{},
	BucketCols: *[]*string,
	Compressed: interface{},
	InputFormat: *string,
	LocationUri: *string,
	NumBuckets: *f64,
	OutputFormat: *string,
	Parameters: *map[string]*string,
	SerdeInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v21.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo,
	SkewedInfo: github.com/cdktn-io/cdktn-provider-google-go/google/v21.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo,
	SortCols: interface{},
	StoredAsSubDirs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns">Columns</a></code> | <code>interface{}</code> | columns block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols">BucketCols</a></code> | <code>*[]*string</code> | Reducer grouping columns, clustering columns, and bucketing columns. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed">Compressed</a></code> | <code>interface{}</code> | Whether the table data is compressed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>*string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri">LocationUri</a></code> | <code>*string</code> | The Cloud Storage URI where the table data is located. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets">NumBuckets</a></code> | <code>*f64</code> | The number of buckets in the table. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | The fully qualified Java class name of the output format. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Key-value pairs for the storage descriptor. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | serde_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols">SortCols</a></code> | <code>interface{}</code> | sort_cols block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs">StoredAsSubDirs</a></code> | <code>interface{}</code> | Whether the table is stored as sub directories. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#columns BiglakeHiveTable#columns}

---

##### `BucketCols`<sup>Optional</sup> <a name="BucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.bucketCols"></a>

```go
BucketCols *[]*string
```

- *Type:* *[]*string

Reducer grouping columns, clustering columns, and bucketing columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#bucket_cols BiglakeHiveTable#bucket_cols}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.compressed"></a>

```go
Compressed interface{}
```

- *Type:* interface{}

Whether the table data is compressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#compressed BiglakeHiveTable#compressed}

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#input_format BiglakeHiveTable#input_format}

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.locationUri"></a>

```go
LocationUri *string
```

- *Type:* *string

The Cloud Storage URI where the table data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location_uri BiglakeHiveTable#location_uri}

---

##### `NumBuckets`<sup>Optional</sup> <a name="NumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.numBuckets"></a>

```go
NumBuckets *f64
```

- *Type:* *f64

The number of buckets in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#num_buckets BiglakeHiveTable#num_buckets}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#output_format BiglakeHiveTable#output_format}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Key-value pairs for the storage descriptor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `SerdeInfo`<sup>Optional</sup> <a name="SerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.serdeInfo"></a>

```go
SerdeInfo BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

serde_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_info BiglakeHiveTable#serde_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.skewedInfo"></a>

```go
SkewedInfo BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_info BiglakeHiveTable#skewed_info}

---

##### `SortCols`<sup>Optional</sup> <a name="SortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.sortCols"></a>

```go
SortCols interface{}
```

- *Type:* interface{}

sort_cols block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#sort_cols BiglakeHiveTable#sort_cols}

---

##### `StoredAsSubDirs`<sup>Optional</sup> <a name="StoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor.property.storedAsSubDirs"></a>

```go
StoredAsSubDirs interface{}
```

- *Type:* interface{}

Whether the table is stored as sub directories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#stored_as_sub_dirs BiglakeHiveTable#stored_as_sub_dirs}

---

### BiglakeHiveTableStorageDescriptorColumns <a name="BiglakeHiveTableStorageDescriptorColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorColumns {
	Name: *string,
	Type: *string,
	Comment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name">Name</a></code> | <code>*string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type">Type</a></code> | <code>*string</code> | Type of the field. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment">Comment</a></code> | <code>*string</code> | Comment of the field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#type BiglakeHiveTable#type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Comment of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#comment BiglakeHiveTable#comment}

---

### BiglakeHiveTableStorageDescriptorSerdeInfo <a name="BiglakeHiveTableStorageDescriptorSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorSerdeInfo {
	Name: *string,
	SerializationLib: *string,
	Description: *string,
	DeserializerClass: *string,
	Parameters: *map[string]*string,
	SerdeType: *string,
	SerializerClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name">Name</a></code> | <code>*string</code> | Name of the SerDe, table name by default. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib">SerializationLib</a></code> | <code>*string</code> | The fully qualified Java class name of the serialization library. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description">Description</a></code> | <code>*string</code> | Description of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass">DeserializerClass</a></code> | <code>*string</code> | The fully qualified Java class name of the deserializer. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Parameters of the SerDe. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType">SerdeType</a></code> | <code>*string</code> | The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"]. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass">SerializerClass</a></code> | <code>*string</code> | The fully qualified Java class name of the serializer. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the SerDe, table name by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#name BiglakeHiveTable#name}

---

##### `SerializationLib`<sup>Required</sup> <a name="SerializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializationLib"></a>

```go
SerializationLib *string
```

- *Type:* *string

The fully qualified Java class name of the serialization library.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serialization_lib BiglakeHiveTable#serialization_lib}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#description BiglakeHiveTable#description}

---

##### `DeserializerClass`<sup>Optional</sup> <a name="DeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.deserializerClass"></a>

```go
DeserializerClass *string
```

- *Type:* *string

The fully qualified Java class name of the deserializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#deserializer_class BiglakeHiveTable#deserializer_class}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Parameters of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#parameters BiglakeHiveTable#parameters}

---

##### `SerdeType`<sup>Optional</sup> <a name="SerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serdeType"></a>

```go
SerdeType *string
```

- *Type:* *string

The SerDe type. Possible values: ["SERDE_TYPE_UNSPECIFIED", "HIVE", "SCHEMA_REGISTRY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serde_type BiglakeHiveTable#serde_type}

---

##### `SerializerClass`<sup>Optional</sup> <a name="SerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo.property.serializerClass"></a>

```go
SerializerClass *string
```

- *Type:* *string

The fully qualified Java class name of the serializer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#serializer_class BiglakeHiveTable#serializer_class}

---

### BiglakeHiveTableStorageDescriptorSkewedInfo <a name="BiglakeHiveTableStorageDescriptorSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorSkewedInfo {
	SkewedColNames: *[]*string,
	SkewedColValues: interface{},
	SkewedKeyValuesLocations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames">SkewedColNames</a></code> | <code>*[]*string</code> | The column names that are skewed. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues">SkewedColValues</a></code> | <code>interface{}</code> | skewed_col_values block. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations">SkewedKeyValuesLocations</a></code> | <code>interface{}</code> | skewed_key_values_locations block. |

---

##### `SkewedColNames`<sup>Required</sup> <a name="SkewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColNames"></a>

```go
SkewedColNames *[]*string
```

- *Type:* *[]*string

The column names that are skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_names BiglakeHiveTable#skewed_col_names}

---

##### `SkewedColValues`<sup>Required</sup> <a name="SkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedColValues"></a>

```go
SkewedColValues interface{}
```

- *Type:* interface{}

skewed_col_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_col_values BiglakeHiveTable#skewed_col_values}

---

##### `SkewedKeyValuesLocations`<sup>Required</sup> <a name="SkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo.property.skewedKeyValuesLocations"></a>

```go
SkewedKeyValuesLocations interface{}
```

- *Type:* interface{}

skewed_key_values_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#skewed_key_values_locations BiglakeHiveTable#skewed_key_values_locations}

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValues.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations {
	Location: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}. |

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#location BiglakeHiveTable#location}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocations.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#values BiglakeHiveTable#values}.

---

### BiglakeHiveTableStorageDescriptorSortCols <a name="BiglakeHiveTableStorageDescriptorSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableStorageDescriptorSortCols {
	Col: *string,
	Order: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col">Col</a></code> | <code>*string</code> | The column name. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order">Order</a></code> | <code>*f64</code> | Sort order: 1 for Ascending, 0 for Descending. |

---

##### `Col`<sup>Required</sup> <a name="Col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.col"></a>

```go
Col *string
```

- *Type:* *string

The column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#col BiglakeHiveTable#col}

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortCols.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Sort order: 1 for Ascending, 0 for Descending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#order BiglakeHiveTable#order}

---

### BiglakeHiveTableTimeouts <a name="BiglakeHiveTableTimeouts" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

&biglakehivetable.BiglakeHiveTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#create BiglakeHiveTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#delete BiglakeHiveTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/biglake_hive_table#update BiglakeHiveTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeHiveTablePartitionKeysList <a name="BiglakeHiveTablePartitionKeysList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTablePartitionKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeHiveTablePartitionKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get"></a>

```go
func Get(index *f64) BiglakeHiveTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTablePartitionKeysOutputReference <a name="BiglakeHiveTablePartitionKeysOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTablePartitionKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeHiveTablePartitionKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.resetComment"></a>

```go
func ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTablePartitionKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorColumnsList <a name="BiglakeHiveTableStorageDescriptorColumnsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeHiveTableStorageDescriptorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get"></a>

```go
func Get(index *f64) BiglakeHiveTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorColumnsOutputReference <a name="BiglakeHiveTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeHiveTableStorageDescriptorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorOutputReference <a name="BiglakeHiveTableStorageDescriptorOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeHiveTableStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo">PutSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols">PutSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols">ResetBucketCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets">ResetNumBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo">ResetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols">ResetSortCols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs">ResetStoredAsSubDirs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSerdeInfo` <a name="PutSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo"></a>

```go
func PutSerdeInfo(value BiglakeHiveTableStorageDescriptorSerdeInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```go
func PutSkewedInfo(value BiglakeHiveTableStorageDescriptorSkewedInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `PutSortCols` <a name="PutSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols"></a>

```go
func PutSortCols(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.putSortCols.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBucketCols` <a name="ResetBucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetBucketCols"></a>

```go
func ResetBucketCols()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetCompressed"></a>

```go
func ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetInputFormat"></a>

```go
func ResetInputFormat()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetLocationUri"></a>

```go
func ResetLocationUri()
```

##### `ResetNumBuckets` <a name="ResetNumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetNumBuckets"></a>

```go
func ResetNumBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSerdeInfo` <a name="ResetSerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSerdeInfo"></a>

```go
func ResetSerdeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```go
func ResetSkewedInfo()
```

##### `ResetSortCols` <a name="ResetSortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetSortCols"></a>

```go
func ResetSortCols()
```

##### `ResetStoredAsSubDirs` <a name="ResetStoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.resetStoredAsSubDirs"></a>

```go
func ResetStoredAsSubDirs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols">SortCols</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput">BucketColsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput">LocationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput">NumBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput">SerdeInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput">SortColsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput">StoredAsSubDirsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols">BucketCols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets">NumBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs">StoredAsSubDirs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columns"></a>

```go
func Columns() BiglakeHiveTableStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorColumnsList">BiglakeHiveTableStorageDescriptorColumnsList</a>

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfo"></a>

```go
func SerdeInfo() BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference">BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```go
func SkewedInfo() BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference">BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortCols`<sup>Required</sup> <a name="SortCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortCols"></a>

```go
func SortCols() BiglakeHiveTableStorageDescriptorSortColsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList">BiglakeHiveTableStorageDescriptorSortColsList</a>

---

##### `BucketColsInput`<sup>Optional</sup> <a name="BucketColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketColsInput"></a>

```go
func BucketColsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressedInput"></a>

```go
func CompressedInput() interface{}
```

- *Type:* interface{}

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUriInput"></a>

```go
func LocationUriInput() *string
```

- *Type:* *string

---

##### `NumBucketsInput`<sup>Optional</sup> <a name="NumBucketsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBucketsInput"></a>

```go
func NumBucketsInput() *f64
```

- *Type:* *f64

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SerdeInfoInput`<sup>Optional</sup> <a name="SerdeInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```go
func SerdeInfoInput() BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```go
func SkewedInfoInput() BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---

##### `SortColsInput`<sup>Optional</sup> <a name="SortColsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.sortColsInput"></a>

```go
func SortColsInput() interface{}
```

- *Type:* interface{}

---

##### `StoredAsSubDirsInput`<sup>Optional</sup> <a name="StoredAsSubDirsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirsInput"></a>

```go
func StoredAsSubDirsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketCols`<sup>Required</sup> <a name="BucketCols" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.bucketCols"></a>

```go
func BucketCols() *[]*string
```

- *Type:* *[]*string

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.compressed"></a>

```go
func Compressed() interface{}
```

- *Type:* interface{}

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `NumBuckets`<sup>Required</sup> <a name="NumBuckets" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.numBuckets"></a>

```go
func NumBuckets() *f64
```

- *Type:* *f64

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StoredAsSubDirs`<sup>Required</sup> <a name="StoredAsSubDirs" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.storedAsSubDirs"></a>

```go
func StoredAsSubDirs() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeHiveTableStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptor">BiglakeHiveTableStorageDescriptor</a>

---


### BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSerdeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass">ResetDeserializerClass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType">ResetSerdeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass">ResetSerializerClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeserializerClass` <a name="ResetDeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetDeserializerClass"></a>

```go
func ResetDeserializerClass()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSerdeType` <a name="ResetSerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerdeType"></a>

```go
func ResetSerdeType()
```

##### `ResetSerializerClass` <a name="ResetSerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.resetSerializerClass"></a>

```go
func ResetSerializerClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput">DeserializerClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput">SerdeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput">SerializationLibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput">SerializerClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass">DeserializerClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType">SerdeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib">SerializationLib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass">SerializerClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeserializerClassInput`<sup>Optional</sup> <a name="DeserializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClassInput"></a>

```go
func DeserializerClassInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SerdeTypeInput`<sup>Optional</sup> <a name="SerdeTypeInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeTypeInput"></a>

```go
func SerdeTypeInput() *string
```

- *Type:* *string

---

##### `SerializationLibInput`<sup>Optional</sup> <a name="SerializationLibInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLibInput"></a>

```go
func SerializationLibInput() *string
```

- *Type:* *string

---

##### `SerializerClassInput`<sup>Optional</sup> <a name="SerializerClassInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClassInput"></a>

```go
func SerializerClassInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeserializerClass`<sup>Required</sup> <a name="DeserializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.deserializerClass"></a>

```go
func DeserializerClass() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SerdeType`<sup>Required</sup> <a name="SerdeType" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serdeType"></a>

```go
func SerdeType() *string
```

- *Type:* *string

---

##### `SerializationLib`<sup>Required</sup> <a name="SerializationLib" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializationLib"></a>

```go
func SerializationLib() *string
```

- *Type:* *string

---

##### `SerializerClass`<sup>Required</sup> <a name="SerializerClass" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.serializerClass"></a>

```go
func SerializerClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeHiveTableStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSerdeInfo">BiglakeHiveTableStorageDescriptorSerdeInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSkewedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues">PutSkewedColValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations">PutSkewedKeyValuesLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSkewedColValues` <a name="PutSkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues"></a>

```go
func PutSkewedColValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedColValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSkewedKeyValuesLocations` <a name="PutSkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations"></a>

```go
func PutSkewedKeyValuesLocations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.putSkewedKeyValuesLocations.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues">SkewedColValues</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations">SkewedKeyValuesLocations</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput">SkewedColNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput">SkewedColValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput">SkewedKeyValuesLocationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames">SkewedColNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SkewedColValues`<sup>Required</sup> <a name="SkewedColValues" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValues"></a>

```go
func SkewedColValues() BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList</a>

---

##### `SkewedKeyValuesLocations`<sup>Required</sup> <a name="SkewedKeyValuesLocations" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocations"></a>

```go
func SkewedKeyValuesLocations() BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList">BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList</a>

---

##### `SkewedColNamesInput`<sup>Optional</sup> <a name="SkewedColNamesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNamesInput"></a>

```go
func SkewedColNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColValuesInput`<sup>Optional</sup> <a name="SkewedColValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColValuesInput"></a>

```go
func SkewedColValuesInput() interface{}
```

- *Type:* interface{}

---

##### `SkewedKeyValuesLocationsInput`<sup>Optional</sup> <a name="SkewedKeyValuesLocationsInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedKeyValuesLocationsInput"></a>

```go
func SkewedKeyValuesLocationsInput() interface{}
```

- *Type:* interface{}

---

##### `SkewedColNames`<sup>Required</sup> <a name="SkewedColNames" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.skewedColNames"></a>

```go
func SkewedColNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeHiveTableStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfo">BiglakeHiveTableStorageDescriptorSkewedInfo</a>

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get"></a>

```go
func Get(index *f64) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedColValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get"></a>

```go
func Get(index *f64) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference <a name="BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSkewedInfoSkewedKeyValuesLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorSortColsList <a name="BiglakeHiveTableStorageDescriptorSortColsList" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSortColsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BiglakeHiveTableStorageDescriptorSortColsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get"></a>

```go
func Get(index *f64) BiglakeHiveTableStorageDescriptorSortColsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableStorageDescriptorSortColsOutputReference <a name="BiglakeHiveTableStorageDescriptorSortColsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableStorageDescriptorSortColsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BiglakeHiveTableStorageDescriptorSortColsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput">ColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col">Col</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColInput`<sup>Optional</sup> <a name="ColInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.colInput"></a>

```go
func ColInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `Col`<sup>Required</sup> <a name="Col" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.col"></a>

```go
func Col() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableStorageDescriptorSortColsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BiglakeHiveTableTimeoutsOutputReference <a name="BiglakeHiveTableTimeoutsOutputReference" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v21/biglakehivetable"

biglakehivetable.NewBiglakeHiveTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeHiveTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.biglakeHiveTable.BiglakeHiveTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




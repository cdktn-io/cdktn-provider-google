# `chronicleNativeDashboard` Submodule <a name="`chronicleNativeDashboard` Submodule" id="@cdktn/provider-google.chronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleNativeDashboard <a name="ChronicleNativeDashboard" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboard(scope Construct, id *string, config ChronicleNativeDashboardConfig) ChronicleNativeDashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig">ChronicleNativeDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts">PutCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts">ResetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCharts` <a name="PutCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts"></a>

```go
func PutCharts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleNativeDashboardTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetCharts` <a name="ResetCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetCharts"></a>

```go
func ResetCharts()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetId"></a>

```go
func ResetId()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetIsPinned"></a>

```go
func ResetIsPinned()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.ChronicleNativeDashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.ChronicleNativeDashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.ChronicleNativeDashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.ChronicleNativeDashboard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleNativeDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts">Charts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId">CreateUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime">LastViewedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId">UpdateUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput">ChartsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput">IsPinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Charts`<sup>Required</sup> <a name="Charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.charts"></a>

```go
func Charts() ChronicleNativeDashboardChartsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList">ChronicleNativeDashboardChartsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreateUserId`<sup>Required</sup> <a name="CreateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.createUserId"></a>

```go
func CreateUserId() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filters"></a>

```go
func Filters() ChronicleNativeDashboardFiltersList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList">ChronicleNativeDashboardFiltersList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `LastViewedTime`<sup>Required</sup> <a name="LastViewedTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.lastViewedTime"></a>

```go
func LastViewedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeouts"></a>

```go
func Timeouts() ChronicleNativeDashboardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference">ChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `UpdateUserId`<sup>Required</sup> <a name="UpdateUserId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.updateUserId"></a>

```go
func UpdateUserId() *string
```

- *Type:* *string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `ChartsInput`<sup>Optional</sup> <a name="ChartsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.chartsInput"></a>

```go
func ChartsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinnedInput"></a>

```go
func IsPinnedInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.isPinned"></a>

```go
func IsPinned() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleNativeDashboardCharts <a name="ChronicleNativeDashboardCharts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardCharts {
	ChartLayout: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout,
	DashboardChart: *string,
	FiltersIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart">DashboardChart</a></code> | <code>*string</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds">FiltersIds</a></code> | <code>*[]*string</code> | List of dashboard filter IDs applied to this chart. |

---

##### `ChartLayout`<sup>Optional</sup> <a name="ChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.chartLayout"></a>

```go
ChartLayout ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#chart_layout ChronicleNativeDashboard#chart_layout}

---

##### `DashboardChart`<sup>Optional</sup> <a name="DashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.dashboardChart"></a>

```go
DashboardChart *string
```

- *Type:* *string

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#dashboard_chart ChronicleNativeDashboard#dashboard_chart}

---

##### `FiltersIds`<sup>Optional</sup> <a name="FiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardCharts.property.filtersIds"></a>

```go
FiltersIds *[]*string
```

- *Type:* *[]*string

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filters_ids ChronicleNativeDashboard#filters_ids}

---

### ChronicleNativeDashboardChartsChartLayout <a name="ChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardChartsChartLayout {
	SpanX: *f64,
	SpanY: *f64,
	StartX: *f64,
	StartY: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX">SpanX</a></code> | <code>*f64</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY">SpanY</a></code> | <code>*f64</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX">StartX</a></code> | <code>*f64</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY">StartY</a></code> | <code>*f64</code> | The starting Y coordinate. |

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```go
SpanX *f64
```

- *Type:* *f64

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#span_x ChronicleNativeDashboard#span_x}

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```go
SpanY *f64
```

- *Type:* *f64

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#span_y ChronicleNativeDashboard#span_y}

---

##### `StartX`<sup>Optional</sup> <a name="StartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```go
StartX *f64
```

- *Type:* *f64

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#start_x ChronicleNativeDashboard#start_x}

---

##### `StartY`<sup>Optional</sup> <a name="StartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```go
StartY *f64
```

- *Type:* *f64

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#start_y ChronicleNativeDashboard#start_y}

---

### ChronicleNativeDashboardConfig <a name="ChronicleNativeDashboardConfig" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Instance: *string,
	Location: *string,
	Access: *string,
	Charts: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Filters: interface{},
	Id: *string,
	IsPinned: interface{},
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v20.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance">Instance</a></code> | <code>*string</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access">Access</a></code> | <code>*string</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts">Charts</a></code> | <code>interface{}</code> | charts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description">Description</a></code> | <code>*string</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters">Filters</a></code> | <code>interface{}</code> | filters block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type">Type</a></code> | <code>*string</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#instance ChronicleNativeDashboard#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#location ChronicleNativeDashboard#location}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#access ChronicleNativeDashboard#access}

---

##### `Charts`<sup>Optional</sup> <a name="Charts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.charts"></a>

```go
Charts interface{}
```

- *Type:* interface{}

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#charts ChronicleNativeDashboard#charts}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#deletion_policy ChronicleNativeDashboard#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#description ChronicleNativeDashboard#description}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filters ChronicleNativeDashboard#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.isPinned"></a>

```go
IsPinned interface{}
```

- *Type:* interface{}

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_pinned ChronicleNativeDashboard#is_pinned}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#project ChronicleNativeDashboard#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.timeouts"></a>

```go
Timeouts ChronicleNativeDashboardTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts">ChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#timeouts ChronicleNativeDashboard#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#type ChronicleNativeDashboard#type}

---

### ChronicleNativeDashboardFilters <a name="ChronicleNativeDashboardFilters" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardFilters {
	ChartIds: *[]*string,
	DataSource: *string,
	DisplayName: *string,
	FieldPath: *string,
	FilterOperatorAndFieldValues: interface{},
	Id: *string,
	IsMandatory: interface{},
	IsStandardTimeRangeFilter: interface{},
	IsStandardTimeRangeFilterEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds">ChartIds</a></code> | <code>*[]*string</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource">DataSource</a></code> | <code>*string</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath">FieldPath</a></code> | <code>*string</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code>interface{}</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id">Id</a></code> | <code>*string</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory">IsMandatory</a></code> | <code>interface{}</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>interface{}</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>interface{}</code> | Whether the standard time range filter is currently enabled. |

---

##### `ChartIds`<sup>Optional</sup> <a name="ChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.chartIds"></a>

```go
ChartIds *[]*string
```

- *Type:* *[]*string

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#chart_ids ChronicleNativeDashboard#chart_ids}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#data_source ChronicleNativeDashboard#data_source}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#display_name ChronicleNativeDashboard#display_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.fieldPath"></a>

```go
FieldPath *string
```

- *Type:* *string

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#field_path ChronicleNativeDashboard#field_path}

---

##### `FilterOperatorAndFieldValues`<sup>Optional</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```go
FilterOperatorAndFieldValues interface{}
```

- *Type:* interface{}

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filter_operator_and_field_values ChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#id ChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMandatory`<sup>Optional</sup> <a name="IsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isMandatory"></a>

```go
IsMandatory interface{}
```

- *Type:* interface{}

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_mandatory ChronicleNativeDashboard#is_mandatory}

---

##### `IsStandardTimeRangeFilter`<sup>Optional</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```go
IsStandardTimeRangeFilter interface{}
```

- *Type:* interface{}

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter ChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```go
IsStandardTimeRangeFilterEnabled interface{}
```

- *Type:* interface{}

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#is_standard_time_range_filter_enabled ChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues {
	FieldValues: *[]*string,
	FilterOperator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">FieldValues</a></code> | <code>*[]*string</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">FilterOperator</a></code> | <code>*string</code> | The operator to apply to the field. |

---

##### `FieldValues`<sup>Optional</sup> <a name="FieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```go
FieldValues *[]*string
```

- *Type:* *[]*string

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#field_values ChronicleNativeDashboard#field_values}

---

##### `FilterOperator`<sup>Optional</sup> <a name="FilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```go
FilterOperator *string
```

- *Type:* *string

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#filter_operator ChronicleNativeDashboard#filter_operator}

---

### ChronicleNativeDashboardTimeouts <a name="ChronicleNativeDashboardTimeouts" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

&chroniclenativedashboard.ChronicleNativeDashboardTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#create ChronicleNativeDashboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#delete ChronicleNativeDashboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/chronicle_native_dashboard#update ChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleNativeDashboardChartsChartLayoutOutputReference <a name="ChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardChartsChartLayoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleNativeDashboardChartsChartLayoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">ResetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">ResetStartY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartX` <a name="ResetStartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```go
func ResetStartX()
```

##### `ResetStartY` <a name="ResetStartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```go
func ResetStartY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">SpanXInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">SpanYInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">StartXInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">StartYInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">SpanX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">SpanY</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">StartX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">StartY</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpanXInput`<sup>Optional</sup> <a name="SpanXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```go
func SpanXInput() *f64
```

- *Type:* *f64

---

##### `SpanYInput`<sup>Optional</sup> <a name="SpanYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```go
func SpanYInput() *f64
```

- *Type:* *f64

---

##### `StartXInput`<sup>Optional</sup> <a name="StartXInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```go
func StartXInput() *f64
```

- *Type:* *f64

---

##### `StartYInput`<sup>Optional</sup> <a name="StartYInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```go
func StartYInput() *f64
```

- *Type:* *f64

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```go
func SpanX() *f64
```

- *Type:* *f64

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```go
func SpanY() *f64
```

- *Type:* *f64

---

##### `StartX`<sup>Required</sup> <a name="StartX" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```go
func StartX() *f64
```

- *Type:* *f64

---

##### `StartY`<sup>Required</sup> <a name="StartY" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```go
func StartY() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---


### ChronicleNativeDashboardChartsList <a name="ChronicleNativeDashboardChartsList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardChartsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleNativeDashboardChartsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get"></a>

```go
func Get(index *f64) ChronicleNativeDashboardChartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardChartsOutputReference <a name="ChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardChartsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleNativeDashboardChartsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout">PutChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout">ResetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart">ResetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds">ResetFiltersIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChartLayout` <a name="PutChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```go
func PutChartLayout(value ChronicleNativeDashboardChartsChartLayout)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `ResetChartLayout` <a name="ResetChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```go
func ResetChartLayout()
```

##### `ResetDashboardChart` <a name="ResetDashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```go
func ResetDashboardChart()
```

##### `ResetFiltersIds` <a name="ResetFiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```go
func ResetFiltersIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">ChartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">DashboardChartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">FiltersIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart">DashboardChart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds">FiltersIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChartLayout`<sup>Required</sup> <a name="ChartLayout" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```go
func ChartLayout() ChronicleNativeDashboardChartsChartLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayoutOutputReference">ChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `ChartLayoutInput`<sup>Optional</sup> <a name="ChartLayoutInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```go
func ChartLayoutInput() ChronicleNativeDashboardChartsChartLayout
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsChartLayout">ChronicleNativeDashboardChartsChartLayout</a>

---

##### `DashboardChartInput`<sup>Optional</sup> <a name="DashboardChartInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```go
func DashboardChartInput() *string
```

- *Type:* *string

---

##### `FiltersIdsInput`<sup>Optional</sup> <a name="FiltersIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```go
func FiltersIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DashboardChart`<sup>Required</sup> <a name="DashboardChart" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```go
func DashboardChart() *string
```

- *Type:* *string

---

##### `FiltersIds`<sup>Required</sup> <a name="FiltersIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```go
func FiltersIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```go
func Get(index *f64) ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">ResetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">ResetFilterOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldValues` <a name="ResetFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```go
func ResetFieldValues()
```

##### `ResetFilterOperator` <a name="ResetFilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```go
func ResetFilterOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">FieldValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">FilterOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">FieldValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">FilterOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldValuesInput`<sup>Optional</sup> <a name="FieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```go
func FieldValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterOperatorInput`<sup>Optional</sup> <a name="FilterOperatorInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```go
func FilterOperatorInput() *string
```

- *Type:* *string

---

##### `FieldValues`<sup>Required</sup> <a name="FieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```go
func FieldValues() *[]*string
```

- *Type:* *[]*string

---

##### `FilterOperator`<sup>Required</sup> <a name="FilterOperator" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```go
func FilterOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardFiltersList <a name="ChronicleNativeDashboardFiltersList" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleNativeDashboardFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get"></a>

```go
func Get(index *f64) ChronicleNativeDashboardFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardFiltersOutputReference <a name="ChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleNativeDashboardFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">PutFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds">ResetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">ResetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">ResetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">ResetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">ResetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterOperatorAndFieldValues` <a name="PutFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```go
func PutFilterOperatorAndFieldValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetChartIds` <a name="ResetChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```go
func ResetChartIds()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```go
func ResetDataSource()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```go
func ResetFieldPath()
```

##### `ResetFilterOperatorAndFieldValues` <a name="ResetFilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```go
func ResetFilterOperatorAndFieldValues()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIsMandatory` <a name="ResetIsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```go
func ResetIsMandatory()
```

##### `ResetIsStandardTimeRangeFilter` <a name="ResetIsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```go
func ResetIsStandardTimeRangeFilter()
```

##### `ResetIsStandardTimeRangeFilterEnabled` <a name="ResetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```go
func ResetIsStandardTimeRangeFilterEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">ChartIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">FilterOperatorAndFieldValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">IsMandatoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">IsStandardTimeRangeFilterEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">IsStandardTimeRangeFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds">ChartIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory">IsMandatory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterOperatorAndFieldValues`<sup>Required</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```go
func FilterOperatorAndFieldValues() ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">ChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `ChartIdsInput`<sup>Optional</sup> <a name="ChartIdsInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```go
func ChartIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```go
func FieldPathInput() *string
```

- *Type:* *string

---

##### `FilterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="FilterOperatorAndFieldValuesInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```go
func FilterOperatorAndFieldValuesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsMandatoryInput`<sup>Optional</sup> <a name="IsMandatoryInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```go
func IsMandatoryInput() interface{}
```

- *Type:* interface{}

---

##### `IsStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```go
func IsStandardTimeRangeFilterEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```go
func IsStandardTimeRangeFilterInput() interface{}
```

- *Type:* interface{}

---

##### `ChartIds`<sup>Required</sup> <a name="ChartIds" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```go
func ChartIds() *[]*string
```

- *Type:* *[]*string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsMandatory`<sup>Required</sup> <a name="IsMandatory" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```go
func IsMandatory() interface{}
```

- *Type:* interface{}

---

##### `IsStandardTimeRangeFilter`<sup>Required</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```go
func IsStandardTimeRangeFilter() interface{}
```

- *Type:* interface{}

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```go
func IsStandardTimeRangeFilterEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleNativeDashboardTimeoutsOutputReference <a name="ChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v20/chroniclenativedashboard"

chroniclenativedashboard.NewChronicleNativeDashboardTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleNativeDashboardTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleNativeDashboard.ChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




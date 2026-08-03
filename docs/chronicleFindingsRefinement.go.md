# `chronicleFindingsRefinement` Submodule <a name="`chronicleFindingsRefinement` Submodule" id="@cdktn/provider-google.chronicleFindingsRefinement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleFindingsRefinement <a name="ChronicleFindingsRefinement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement google_chronicle_findings_refinement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.NewChronicleFindingsRefinement(scope Construct, id *string, config ChronicleFindingsRefinementConfig) ChronicleFindingsRefinement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig">ChronicleFindingsRefinementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig">ChronicleFindingsRefinementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters">PutOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters">ResetOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutcomeFilters` <a name="PutOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters"></a>

```go
func PutOutcomeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putOutcomeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleFindingsRefinementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetId"></a>

```go
func ResetId()
```

##### `ResetOutcomeFilters` <a name="ResetOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetOutcomeFilters"></a>

```go
func ResetOutcomeFilters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.ChronicleFindingsRefinement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.ChronicleFindingsRefinement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.ChronicleFindingsRefinement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.ChronicleFindingsRefinement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleFindingsRefinement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleFindingsRefinement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleFindingsRefinement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters">OutcomeFilters</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput">OutcomeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutcomeFilters`<sup>Required</sup> <a name="OutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFilters"></a>

```go
func OutcomeFilters() ChronicleFindingsRefinementOutcomeFiltersList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList">ChronicleFindingsRefinementOutcomeFiltersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeouts"></a>

```go
func Timeouts() ChronicleFindingsRefinementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference">ChronicleFindingsRefinementTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OutcomeFiltersInput`<sup>Optional</sup> <a name="OutcomeFiltersInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.outcomeFiltersInput"></a>

```go
func OutcomeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleFindingsRefinementConfig <a name="ChronicleFindingsRefinementConfig" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

&chroniclefindingsrefinement.ChronicleFindingsRefinementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Location: *string,
	DisplayName: *string,
	Id: *string,
	OutcomeFilters: interface{},
	Project: *string,
	Query: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance">Instance</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters">OutcomeFilters</a></code> | <code>interface{}</code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query">Query</a></code> | <code>*string</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type">Type</a></code> | <code>*string</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#instance ChronicleFindingsRefinement#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#location ChronicleFindingsRefinement#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#display_name ChronicleFindingsRefinement#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#id ChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutcomeFilters`<sup>Optional</sup> <a name="OutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.outcomeFilters"></a>

```go
OutcomeFilters interface{}
```

- *Type:* interface{}

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#outcome_filters ChronicleFindingsRefinement#outcome_filters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#project ChronicleFindingsRefinement#project}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#query ChronicleFindingsRefinement#query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.timeouts"></a>

```go
Timeouts ChronicleFindingsRefinementTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts">ChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#timeouts ChronicleFindingsRefinement#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#type ChronicleFindingsRefinement#type}

---

### ChronicleFindingsRefinementOutcomeFilters <a name="ChronicleFindingsRefinementOutcomeFilters" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

&chroniclefindingsrefinement.ChronicleFindingsRefinementOutcomeFilters {
	OutcomeFilterOperator: *string,
	OutcomeValue: *string,
	OutcomeVariable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator">OutcomeFilterOperator</a></code> | <code>*string</code> | The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue">OutcomeValue</a></code> | <code>*string</code> | The value of the outcome variable to match. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable">OutcomeVariable</a></code> | <code>*string</code> | The outcome variable name. |

---

##### `OutcomeFilterOperator`<sup>Required</sup> <a name="OutcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator"></a>

```go
OutcomeFilterOperator *string
```

- *Type:* *string

The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#outcome_filter_operator ChronicleFindingsRefinement#outcome_filter_operator}

---

##### `OutcomeValue`<sup>Required</sup> <a name="OutcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeValue"></a>

```go
OutcomeValue *string
```

- *Type:* *string

The value of the outcome variable to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#outcome_value ChronicleFindingsRefinement#outcome_value}

---

##### `OutcomeVariable`<sup>Required</sup> <a name="OutcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable"></a>

```go
OutcomeVariable *string
```

- *Type:* *string

The outcome variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#outcome_variable ChronicleFindingsRefinement#outcome_variable}

---

### ChronicleFindingsRefinementTimeouts <a name="ChronicleFindingsRefinementTimeouts" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

&chroniclefindingsrefinement.ChronicleFindingsRefinementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#create ChronicleFindingsRefinement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#delete ChronicleFindingsRefinement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_findings_refinement#update ChronicleFindingsRefinement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleFindingsRefinementOutcomeFiltersList <a name="ChronicleFindingsRefinementOutcomeFiltersList" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.NewChronicleFindingsRefinementOutcomeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleFindingsRefinementOutcomeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get"></a>

```go
func Get(index *f64) ChronicleFindingsRefinementOutcomeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleFindingsRefinementOutcomeFiltersOutputReference <a name="ChronicleFindingsRefinementOutcomeFiltersOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.NewChronicleFindingsRefinementOutcomeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleFindingsRefinementOutcomeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput">OutcomeFilterOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput">OutcomeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput">OutcomeVariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator">OutcomeFilterOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue">OutcomeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable">OutcomeVariable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutcomeFilterOperatorInput`<sup>Optional</sup> <a name="OutcomeFilterOperatorInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput"></a>

```go
func OutcomeFilterOperatorInput() *string
```

- *Type:* *string

---

##### `OutcomeValueInput`<sup>Optional</sup> <a name="OutcomeValueInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput"></a>

```go
func OutcomeValueInput() *string
```

- *Type:* *string

---

##### `OutcomeVariableInput`<sup>Optional</sup> <a name="OutcomeVariableInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput"></a>

```go
func OutcomeVariableInput() *string
```

- *Type:* *string

---

##### `OutcomeFilterOperator`<sup>Required</sup> <a name="OutcomeFilterOperator" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator"></a>

```go
func OutcomeFilterOperator() *string
```

- *Type:* *string

---

##### `OutcomeValue`<sup>Required</sup> <a name="OutcomeValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue"></a>

```go
func OutcomeValue() *string
```

- *Type:* *string

---

##### `OutcomeVariable`<sup>Required</sup> <a name="OutcomeVariable" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable"></a>

```go
func OutcomeVariable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChronicleFindingsRefinementTimeoutsOutputReference <a name="ChronicleFindingsRefinementTimeoutsOutputReference" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/chroniclefindingsrefinement"

chroniclefindingsrefinement.NewChronicleFindingsRefinementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleFindingsRefinementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.chronicleFindingsRefinement.ChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




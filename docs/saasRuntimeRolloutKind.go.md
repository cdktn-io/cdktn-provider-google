# `saasRuntimeRolloutKind` Submodule <a name="`saasRuntimeRolloutKind` Submodule" id="@cdktn/provider-google.saasRuntimeRolloutKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeRolloutKind <a name="SaasRuntimeRolloutKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind google_saas_runtime_rollout_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.NewSaasRuntimeRolloutKind(scope Construct, id *string, config SaasRuntimeRolloutKindConfig) SaasRuntimeRolloutKind
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig">SaasRuntimeRolloutKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig">SaasRuntimeRolloutKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget">PutErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget">ResetErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy">ResetRolloutOrchestrationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter">ResetUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy">ResetUpdateUnitKindStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrorBudget` <a name="PutErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget"></a>

```go
func PutErrorBudget(value SaasRuntimeRolloutKindErrorBudget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putErrorBudget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts"></a>

```go
func PutTimeouts(value SaasRuntimeRolloutKindTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetErrorBudget` <a name="ResetErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetErrorBudget"></a>

```go
func ResetErrorBudget()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRolloutOrchestrationStrategy` <a name="ResetRolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetRolloutOrchestrationStrategy"></a>

```go
func ResetRolloutOrchestrationStrategy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnitFilter` <a name="ResetUnitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUnitFilter"></a>

```go
func ResetUnitFilter()
```

##### `ResetUpdateUnitKindStrategy` <a name="ResetUpdateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.resetUpdateUnitKindStrategy"></a>

```go
func ResetUpdateUnitKindStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.SaasRuntimeRolloutKind_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.SaasRuntimeRolloutKind_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.SaasRuntimeRolloutKind_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.SaasRuntimeRolloutKind_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SaasRuntimeRolloutKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SaasRuntimeRolloutKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SaasRuntimeRolloutKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeRolloutKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput">ErrorBudgetInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput">RolloutKindIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput">RolloutOrchestrationStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput">UnitFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput">UnitKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput">UpdateUnitKindStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId">RolloutKindId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter">UnitFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind">UnitKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ErrorBudget`<sup>Required</sup> <a name="ErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudget"></a>

```go
func ErrorBudget() SaasRuntimeRolloutKindErrorBudgetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference">SaasRuntimeRolloutKindErrorBudgetOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeouts"></a>

```go
func Timeouts() SaasRuntimeRolloutKindTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference">SaasRuntimeRolloutKindTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `ErrorBudgetInput`<sup>Optional</sup> <a name="ErrorBudgetInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.errorBudgetInput"></a>

```go
func ErrorBudgetInput() SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutKindIdInput`<sup>Optional</sup> <a name="RolloutKindIdInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindIdInput"></a>

```go
func RolloutKindIdInput() *string
```

- *Type:* *string

---

##### `RolloutOrchestrationStrategyInput`<sup>Optional</sup> <a name="RolloutOrchestrationStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategyInput"></a>

```go
func RolloutOrchestrationStrategyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnitFilterInput`<sup>Optional</sup> <a name="UnitFilterInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilterInput"></a>

```go
func UnitFilterInput() *string
```

- *Type:* *string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKindInput"></a>

```go
func UnitKindInput() *string
```

- *Type:* *string

---

##### `UpdateUnitKindStrategyInput`<sup>Optional</sup> <a name="UpdateUnitKindStrategyInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategyInput"></a>

```go
func UpdateUnitKindStrategyInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutKindId"></a>

```go
func RolloutKindId() *string
```

- *Type:* *string

---

##### `RolloutOrchestrationStrategy`<sup>Required</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.rolloutOrchestrationStrategy"></a>

```go
func RolloutOrchestrationStrategy() *string
```

- *Type:* *string

---

##### `UnitFilter`<sup>Required</sup> <a name="UnitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitFilter"></a>

```go
func UnitFilter() *string
```

- *Type:* *string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.unitKind"></a>

```go
func UnitKind() *string
```

- *Type:* *string

---

##### `UpdateUnitKindStrategy`<sup>Required</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.updateUnitKindStrategy"></a>

```go
func UpdateUnitKindStrategy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKind.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeRolloutKindConfig <a name="SaasRuntimeRolloutKindConfig" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

&saasruntimerolloutkind.SaasRuntimeRolloutKindConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	RolloutKindId: *string,
	UnitKind: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	ErrorBudget: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	RolloutOrchestrationStrategy: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v22.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts,
	UnitFilter: *string,
	UpdateUnitKindStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId">RolloutKindId</a></code> | <code>*string</code> | The ID value for the new rollout kind. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind">UnitKind</a></code> | <code>*string</code> | UnitKind that this rollout kind corresponds to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget">ErrorBudget</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | error_budget block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy">RolloutOrchestrationStrategy</a></code> | <code>*string</code> | The strategy used for executing a Rollout. This is a required field. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter">UnitFilter</a></code> | <code>*string</code> | CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy">UpdateUnitKindStrategy</a></code> | <code>*string</code> | The config for updating the unit kind. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#location SaasRuntimeRolloutKind#location}

---

##### `RolloutKindId`<sup>Required</sup> <a name="RolloutKindId" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutKindId"></a>

```go
RolloutKindId *string
```

- *Type:* *string

The ID value for the new rollout kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_kind_id SaasRuntimeRolloutKind#rollout_kind_id}

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitKind"></a>

```go
UnitKind *string
```

- *Type:* *string

UnitKind that this rollout kind corresponds to.

Rollouts stemming from this
rollout kind will target the units of this unit kind. In other words, this
defines the population of target units to be upgraded by rollouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_kind SaasRuntimeRolloutKind#unit_kind}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#annotations SaasRuntimeRolloutKind#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#deletion_policy SaasRuntimeRolloutKind#deletion_policy}

---

##### `ErrorBudget`<sup>Optional</sup> <a name="ErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.errorBudget"></a>

```go
ErrorBudget SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

error_budget block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#error_budget SaasRuntimeRolloutKind#error_budget}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#id SaasRuntimeRolloutKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#labels SaasRuntimeRolloutKind#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#project SaasRuntimeRolloutKind#project}.

---

##### `RolloutOrchestrationStrategy`<sup>Optional</sup> <a name="RolloutOrchestrationStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.rolloutOrchestrationStrategy"></a>

```go
RolloutOrchestrationStrategy *string
```

- *Type:* *string

The strategy used for executing a Rollout. This is a required field.

There are two supported values strategies which are used to control a rollout.

* "Google.Cloud.Simple.AllAtOnce"
* "Google.Cloud.Simple.OneLocationAtATime"

A rollout with one of these simple strategies will rollout across
all locations defined in the associated UnitKind's Saas Locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#rollout_orchestration_strategy SaasRuntimeRolloutKind#rollout_orchestration_strategy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.timeouts"></a>

```go
Timeouts SaasRuntimeRolloutKindTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts">SaasRuntimeRolloutKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#timeouts SaasRuntimeRolloutKind#timeouts}

---

##### `UnitFilter`<sup>Optional</sup> <a name="UnitFilter" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.unitFilter"></a>

```go
UnitFilter *string
```

- *Type:* *string

CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#unit_filter SaasRuntimeRolloutKind#unit_filter}

---

##### `UpdateUnitKindStrategy`<sup>Optional</sup> <a name="UpdateUnitKindStrategy" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindConfig.property.updateUnitKindStrategy"></a>

```go
UpdateUnitKindStrategy *string
```

- *Type:* *string

The config for updating the unit kind.

By default, the unit kind will be
updated on the rollout start.
Possible values:
UPDATE_UNIT_KIND_STRATEGY_ON_START
UPDATE_UNIT_KIND_STRATEGY_NEVER Possible values: ["UPDATE_UNIT_KIND_STRATEGY_ON_START", "UPDATE_UNIT_KIND_STRATEGY_NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update_unit_kind_strategy SaasRuntimeRolloutKind#update_unit_kind_strategy}

---

### SaasRuntimeRolloutKindErrorBudget <a name="SaasRuntimeRolloutKindErrorBudget" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

&saasruntimerolloutkind.SaasRuntimeRolloutKindErrorBudget {
	AllowedCount: *f64,
	AllowedPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount">AllowedCount</a></code> | <code>*f64</code> | The maximum number of failed units allowed in a location without pausing the rollout. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage">AllowedPercentage</a></code> | <code>*f64</code> | The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout. |

---

##### `AllowedCount`<sup>Optional</sup> <a name="AllowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedCount"></a>

```go
AllowedCount *f64
```

- *Type:* *f64

The maximum number of failed units allowed in a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_count SaasRuntimeRolloutKind#allowed_count}

---

##### `AllowedPercentage`<sup>Optional</sup> <a name="AllowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget.property.allowedPercentage"></a>

```go
AllowedPercentage *f64
```

- *Type:* *f64

The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#allowed_percentage SaasRuntimeRolloutKind#allowed_percentage}

---

### SaasRuntimeRolloutKindTimeouts <a name="SaasRuntimeRolloutKindTimeouts" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

&saasruntimerolloutkind.SaasRuntimeRolloutKindTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#create SaasRuntimeRolloutKind#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#delete SaasRuntimeRolloutKind#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_rollout_kind#update SaasRuntimeRolloutKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeRolloutKindErrorBudgetOutputReference <a name="SaasRuntimeRolloutKindErrorBudgetOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.NewSaasRuntimeRolloutKindErrorBudgetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeRolloutKindErrorBudgetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount">ResetAllowedCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage">ResetAllowedPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedCount` <a name="ResetAllowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedCount"></a>

```go
func ResetAllowedCount()
```

##### `ResetAllowedPercentage` <a name="ResetAllowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.resetAllowedPercentage"></a>

```go
func ResetAllowedPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput">AllowedCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput">AllowedPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount">AllowedCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage">AllowedPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedCountInput`<sup>Optional</sup> <a name="AllowedCountInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCountInput"></a>

```go
func AllowedCountInput() *f64
```

- *Type:* *f64

---

##### `AllowedPercentageInput`<sup>Optional</sup> <a name="AllowedPercentageInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentageInput"></a>

```go
func AllowedPercentageInput() *f64
```

- *Type:* *f64

---

##### `AllowedCount`<sup>Required</sup> <a name="AllowedCount" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedCount"></a>

```go
func AllowedCount() *f64
```

- *Type:* *f64

---

##### `AllowedPercentage`<sup>Required</sup> <a name="AllowedPercentage" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.allowedPercentage"></a>

```go
func AllowedPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudgetOutputReference.property.internalValue"></a>

```go
func InternalValue() SaasRuntimeRolloutKindErrorBudget
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindErrorBudget">SaasRuntimeRolloutKindErrorBudget</a>

---


### SaasRuntimeRolloutKindTimeoutsOutputReference <a name="SaasRuntimeRolloutKindTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v22/saasruntimerolloutkind"

saasruntimerolloutkind.NewSaasRuntimeRolloutKindTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SaasRuntimeRolloutKindTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeRolloutKind.SaasRuntimeRolloutKindTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




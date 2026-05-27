# `discoveryEngineControl` Submodule <a name="`discoveryEngineControl` Submodule" id="@cdktn/provider-google.discoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineControl <a name="DiscoveryEngineControl" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControl(scope Construct, id *string, config DiscoveryEngineControlConfig) DiscoveryEngineControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig">DiscoveryEngineControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig">DiscoveryEngineControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction">PutBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction">PutFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction">PutPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction">PutRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction">PutSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction">ResetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction">ResetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction">ResetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction">ResetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction">ResetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases">ResetUseCases</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBoostAction` <a name="PutBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction"></a>

```go
func PutBoostAction(value DiscoveryEngineControlBoostAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFilterAction` <a name="PutFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction"></a>

```go
func PutFilterAction(value DiscoveryEngineControlFilterAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `PutPromoteAction` <a name="PutPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction"></a>

```go
func PutPromoteAction(value DiscoveryEngineControlPromoteAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `PutRedirectAction` <a name="PutRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction"></a>

```go
func PutRedirectAction(value DiscoveryEngineControlRedirectAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `PutSynonymsAction` <a name="PutSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction"></a>

```go
func PutSynonymsAction(value DiscoveryEngineControlSynonymsAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineControlTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

---

##### `ResetBoostAction` <a name="ResetBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetBoostAction"></a>

```go
func ResetBoostAction()
```

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetCollectionId"></a>

```go
func ResetCollectionId()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetFilterAction` <a name="ResetFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetFilterAction"></a>

```go
func ResetFilterAction()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPromoteAction` <a name="ResetPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetPromoteAction"></a>

```go
func ResetPromoteAction()
```

##### `ResetRedirectAction` <a name="ResetRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetRedirectAction"></a>

```go
func ResetRedirectAction()
```

##### `ResetSynonymsAction` <a name="ResetSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetSynonymsAction"></a>

```go
func ResetSynonymsAction()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseCases` <a name="ResetUseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.resetUseCases"></a>

```go
func ResetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.DiscoveryEngineControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.DiscoveryEngineControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.DiscoveryEngineControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.DiscoveryEngineControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput">BoostActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput">ControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput">FilterActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput">PromoteActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput">RedirectActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput">SolutionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput">SynonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput">UseCasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId">ControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType">SolutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases">UseCases</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BoostAction`<sup>Required</sup> <a name="BoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostAction"></a>

```go
func BoostAction() DiscoveryEngineControlBoostActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference">DiscoveryEngineControlBoostActionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditions"></a>

```go
func Conditions() DiscoveryEngineControlConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList">DiscoveryEngineControlConditionsList</a>

---

##### `FilterAction`<sup>Required</sup> <a name="FilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterAction"></a>

```go
func FilterAction() DiscoveryEngineControlFilterActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference">DiscoveryEngineControlFilterActionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PromoteAction`<sup>Required</sup> <a name="PromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteAction"></a>

```go
func PromoteAction() DiscoveryEngineControlPromoteActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference">DiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `RedirectAction`<sup>Required</sup> <a name="RedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectAction"></a>

```go
func RedirectAction() DiscoveryEngineControlRedirectActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference">DiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `SynonymsAction`<sup>Required</sup> <a name="SynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsAction"></a>

```go
func SynonymsAction() DiscoveryEngineControlSynonymsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference">DiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineControlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference">DiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `BoostActionInput`<sup>Optional</sup> <a name="BoostActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.boostActionInput"></a>

```go
func BoostActionInput() DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `ControlIdInput`<sup>Optional</sup> <a name="ControlIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlIdInput"></a>

```go
func ControlIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `FilterActionInput`<sup>Optional</sup> <a name="FilterActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.filterActionInput"></a>

```go
func FilterActionInput() DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PromoteActionInput`<sup>Optional</sup> <a name="PromoteActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.promoteActionInput"></a>

```go
func PromoteActionInput() DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---

##### `RedirectActionInput`<sup>Optional</sup> <a name="RedirectActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.redirectActionInput"></a>

```go
func RedirectActionInput() DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---

##### `SolutionTypeInput`<sup>Optional</sup> <a name="SolutionTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionTypeInput"></a>

```go
func SolutionTypeInput() *string
```

- *Type:* *string

---

##### `SynonymsActionInput`<sup>Optional</sup> <a name="SynonymsActionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.synonymsActionInput"></a>

```go
func SynonymsActionInput() DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCasesInput"></a>

```go
func UseCasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.controlId"></a>

```go
func ControlId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.solutionType"></a>

```go
func SolutionType() *string
```

- *Type:* *string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.useCases"></a>

```go
func UseCases() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineControlBoostAction <a name="DiscoveryEngineControlBoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlBoostAction {
	DataStore: *string,
	Filter: *string,
	FixedBoost: *f64,
	InterpolationBoostSpec: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore">DataStore</a></code> | <code>*string</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost">FixedBoost</a></code> | <code>*f64</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.dataStore"></a>

```go
DataStore *string
```

- *Type:* *string

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

##### `FixedBoost`<sup>Optional</sup> <a name="FixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```go
FixedBoost *f64
```

- *Type:* *f64

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#fixed_boost DiscoveryEngineControl#fixed_boost}

---

##### `InterpolationBoostSpec`<sup>Optional</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```go
InterpolationBoostSpec DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#interpolation_boost_spec DiscoveryEngineControl#interpolation_boost_spec}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlBoostActionInterpolationBoostSpec {
	AttributeType: *string,
	ControlPoint: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint,
	FieldName: *string,
	InterpolationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">AttributeType</a></code> | <code>*string</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">FieldName</a></code> | <code>*string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">InterpolationType</a></code> | <code>*string</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `AttributeType`<sup>Optional</sup> <a name="AttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```go
AttributeType *string
```

- *Type:* *string

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#attribute_type DiscoveryEngineControl#attribute_type}

---

##### `ControlPoint`<sup>Optional</sup> <a name="ControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```go
ControlPoint DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#control_point DiscoveryEngineControl#control_point}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```go
FieldName *string
```

- *Type:* *string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#field_name DiscoveryEngineControl#field_name}

---

##### `InterpolationType`<sup>Optional</sup> <a name="InterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```go
InterpolationType *string
```

- *Type:* *string

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#interpolation_type DiscoveryEngineControl#interpolation_type}

---

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint {
	AttributeValue: *string,
	BoostAmount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">BoostAmount</a></code> | <code>*f64</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#attribute_value DiscoveryEngineControl#attribute_value}

---

##### `BoostAmount`<sup>Optional</sup> <a name="BoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```go
BoostAmount *f64
```

- *Type:* *f64

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#boost_amount DiscoveryEngineControl#boost_amount}

---

### DiscoveryEngineControlConditions <a name="DiscoveryEngineControlConditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlConditions {
	ActiveTimeRange: interface{},
	QueryRegex: *string,
	QueryTerms: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange">ActiveTimeRange</a></code> | <code>interface{}</code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex">QueryRegex</a></code> | <code>*string</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms">QueryTerms</a></code> | <code>interface{}</code> | query_terms block. |

---

##### `ActiveTimeRange`<sup>Optional</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.activeTimeRange"></a>

```go
ActiveTimeRange interface{}
```

- *Type:* interface{}

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#active_time_range DiscoveryEngineControl#active_time_range}

---

##### `QueryRegex`<sup>Optional</sup> <a name="QueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryRegex"></a>

```go
QueryRegex *string
```

- *Type:* *string

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#query_regex DiscoveryEngineControl#query_regex}

---

##### `QueryTerms`<sup>Optional</sup> <a name="QueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditions.property.queryTerms"></a>

```go
QueryTerms interface{}
```

- *Type:* interface{}

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#query_terms DiscoveryEngineControl#query_terms}

---

### DiscoveryEngineControlConditionsActiveTimeRange <a name="DiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlConditionsActiveTimeRange {
	EndTime: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime">EndTime</a></code> | <code>*string</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime">StartTime</a></code> | <code>*string</code> | The start time of the active time range. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#end_time DiscoveryEngineControl#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#start_time DiscoveryEngineControl#start_time}

---

### DiscoveryEngineControlConditionsQueryTerms <a name="DiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlConditionsQueryTerms {
	FullMatch: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch">FullMatch</a></code> | <code>interface{}</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value">Value</a></code> | <code>*string</code> | The value of the query term. |

---

##### `FullMatch`<sup>Optional</sup> <a name="FullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```go
FullMatch interface{}
```

- *Type:* interface{}

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#full_match DiscoveryEngineControl#full_match}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#value DiscoveryEngineControl#value}

---

### DiscoveryEngineControlConfig <a name="DiscoveryEngineControlConfig" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ControlId: *string,
	DisplayName: *string,
	EngineId: *string,
	Location: *string,
	SolutionType: *string,
	BoostAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlBoostAction,
	CollectionId: *string,
	Conditions: interface{},
	DeletionPolicy: *string,
	FilterAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlFilterAction,
	Id: *string,
	Project: *string,
	PromoteAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlPromoteAction,
	RedirectAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlRedirectAction,
	SynonymsAction: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlSynonymsAction,
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlTimeouts,
	UseCases: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId">ControlId</a></code> | <code>*string</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId">EngineId</a></code> | <code>*string</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType">SolutionType</a></code> | <code>*string</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction">BoostAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction">FilterAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction">PromoteAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction">RedirectAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction">SynonymsAction</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases">UseCases</a></code> | <code>*[]*string</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ControlId`<sup>Required</sup> <a name="ControlId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.controlId"></a>

```go
ControlId *string
```

- *Type:* *string

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#control_id DiscoveryEngineControl#control_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#display_name DiscoveryEngineControl#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#engine_id DiscoveryEngineControl#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#location DiscoveryEngineControl#location}

---

##### `SolutionType`<sup>Required</sup> <a name="SolutionType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.solutionType"></a>

```go
SolutionType *string
```

- *Type:* *string

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#solution_type DiscoveryEngineControl#solution_type}

---

##### `BoostAction`<sup>Optional</sup> <a name="BoostAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.boostAction"></a>

```go
BoostAction DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#boost_action DiscoveryEngineControl#boost_action}

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#collection_id DiscoveryEngineControl#collection_id}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#conditions DiscoveryEngineControl#conditions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#deletion_policy DiscoveryEngineControl#deletion_policy}

---

##### `FilterAction`<sup>Optional</sup> <a name="FilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.filterAction"></a>

```go
FilterAction DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#filter_action DiscoveryEngineControl#filter_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#id DiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#project DiscoveryEngineControl#project}.

---

##### `PromoteAction`<sup>Optional</sup> <a name="PromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.promoteAction"></a>

```go
PromoteAction DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#promote_action DiscoveryEngineControl#promote_action}

---

##### `RedirectAction`<sup>Optional</sup> <a name="RedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.redirectAction"></a>

```go
RedirectAction DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#redirect_action DiscoveryEngineControl#redirect_action}

---

##### `SynonymsAction`<sup>Optional</sup> <a name="SynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.synonymsAction"></a>

```go
SynonymsAction DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#synonyms_action DiscoveryEngineControl#synonyms_action}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineControlTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts">DiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#timeouts DiscoveryEngineControl#timeouts}

---

##### `UseCases`<sup>Optional</sup> <a name="UseCases" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConfig.property.useCases"></a>

```go
UseCases *[]*string
```

- *Type:* *[]*string

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#use_cases DiscoveryEngineControl#use_cases}

---

### DiscoveryEngineControlFilterAction <a name="DiscoveryEngineControlFilterAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlFilterAction {
	DataStore: *string,
	Filter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore">DataStore</a></code> | <code>*string</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter">Filter</a></code> | <code>*string</code> | The filter to apply to the search results. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.dataStore"></a>

```go
DataStore *string
```

- *Type:* *string

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#filter DiscoveryEngineControl#filter}

---

### DiscoveryEngineControlPromoteAction <a name="DiscoveryEngineControlPromoteAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlPromoteAction {
	DataStore: *string,
	SearchLinkPromotion: github.com/cdktn-io/cdktn-provider-google-go/google/v19.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore">DataStore</a></code> | <code>*string</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.dataStore"></a>

```go
DataStore *string
```

- *Type:* *string

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#data_store DiscoveryEngineControl#data_store}

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```go
SearchLinkPromotion DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#search_link_promotion DiscoveryEngineControl#search_link_promotion}

---

### DiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlPromoteActionSearchLinkPromotion {
	Title: *string,
	Description: *string,
	Document: *string,
	Enabled: interface{},
	ImageUri: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">Title</a></code> | <code>*string</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">Description</a></code> | <code>*string</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">Document</a></code> | <code>*string</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">Enabled</a></code> | <code>interface{}</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">ImageUri</a></code> | <code>*string</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">Uri</a></code> | <code>*string</code> | The URI to promote. |

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#title DiscoveryEngineControl#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#description DiscoveryEngineControl#description}

---

##### `Document`<sup>Optional</sup> <a name="Document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```go
Document *string
```

- *Type:* *string

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#document DiscoveryEngineControl#document}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#enabled DiscoveryEngineControl#enabled}

---

##### `ImageUri`<sup>Optional</sup> <a name="ImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```go
ImageUri *string
```

- *Type:* *string

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#image_uri DiscoveryEngineControl#image_uri}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#uri DiscoveryEngineControl#uri}

---

### DiscoveryEngineControlRedirectAction <a name="DiscoveryEngineControlRedirectAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlRedirectAction {
	RedirectUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | The URI to redirect to. |

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#redirect_uri DiscoveryEngineControl#redirect_uri}

---

### DiscoveryEngineControlSynonymsAction <a name="DiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlSynonymsAction {
	Synonyms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | The synonyms to apply to the search results. |

---

##### `Synonyms`<sup>Optional</sup> <a name="Synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```go
Synonyms *[]*string
```

- *Type:* *[]*string

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#synonyms DiscoveryEngineControl#synonyms}

---

### DiscoveryEngineControlTimeouts <a name="DiscoveryEngineControlTimeouts" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

&discoveryenginecontrol.DiscoveryEngineControlTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#create DiscoveryEngineControl#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#delete DiscoveryEngineControl#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/discovery_engine_control#update DiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">ResetBoostAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```

##### `ResetBoostAmount` <a name="ResetBoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```go
func ResetBoostAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">BoostAmountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">BoostAmount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `BoostAmountInput`<sup>Optional</sup> <a name="BoostAmountInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```go
func BoostAmountInput() *f64
```

- *Type:* *f64

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `BoostAmount`<sup>Required</sup> <a name="BoostAmount" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```go
func BoostAmount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">PutControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">ResetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">ResetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">ResetInterpolationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlPoint` <a name="PutControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```go
func PutControlPoint(value DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `ResetAttributeType` <a name="ResetAttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```go
func ResetAttributeType()
```

##### `ResetControlPoint` <a name="ResetControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```go
func ResetControlPoint()
```

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```go
func ResetFieldName()
```

##### `ResetInterpolationType` <a name="ResetInterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```go
func ResetInterpolationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">ControlPoint</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">AttributeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">ControlPointInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">InterpolationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">AttributeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">FieldName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">InterpolationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlPoint`<sup>Required</sup> <a name="ControlPoint" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```go
func ControlPoint() DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `AttributeTypeInput`<sup>Optional</sup> <a name="AttributeTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```go
func AttributeTypeInput() *string
```

- *Type:* *string

---

##### `ControlPointInput`<sup>Optional</sup> <a name="ControlPointInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```go
func ControlPointInput() DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">DiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```go
func FieldNameInput() *string
```

- *Type:* *string

---

##### `InterpolationTypeInput`<sup>Optional</sup> <a name="InterpolationTypeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```go
func InterpolationTypeInput() *string
```

- *Type:* *string

---

##### `AttributeType`<sup>Required</sup> <a name="AttributeType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```go
func AttributeType() *string
```

- *Type:* *string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```go
func FieldName() *string
```

- *Type:* *string

---

##### `InterpolationType`<sup>Required</sup> <a name="InterpolationType" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```go
func InterpolationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### DiscoveryEngineControlBoostActionOutputReference <a name="DiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlBoostActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlBoostActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">PutInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">ResetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">ResetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterpolationBoostSpec` <a name="PutInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```go
func PutInterpolationBoostSpec(value DiscoveryEngineControlBoostActionInterpolationBoostSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `ResetFixedBoost` <a name="ResetFixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```go
func ResetFixedBoost()
```

##### `ResetInterpolationBoostSpec` <a name="ResetInterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```go
func ResetInterpolationBoostSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">InterpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">FixedBoostInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">InterpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">FixedBoost</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InterpolationBoostSpec`<sup>Required</sup> <a name="InterpolationBoostSpec" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```go
func InterpolationBoostSpec() DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">DiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```go
func DataStoreInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `FixedBoostInput`<sup>Optional</sup> <a name="FixedBoostInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```go
func FixedBoostInput() *f64
```

- *Type:* *f64

---

##### `InterpolationBoostSpecInput`<sup>Optional</sup> <a name="InterpolationBoostSpecInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```go
func InterpolationBoostSpecInput() DiscoveryEngineControlBoostActionInterpolationBoostSpec
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionInterpolationBoostSpec">DiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `FixedBoost`<sup>Required</sup> <a name="FixedBoost" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```go
func FixedBoost() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlBoostAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlBoostAction">DiscoveryEngineControlBoostAction</a>

---


### DiscoveryEngineControlConditionsActiveTimeRangeList <a name="DiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsActiveTimeRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineControlConditionsActiveTimeRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```go
func Get(index *f64) DiscoveryEngineControlConditionsActiveTimeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="DiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsActiveTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineControlConditionsActiveTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlConditionsList <a name="DiscoveryEngineControlConditionsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineControlConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get"></a>

```go
func Get(index *f64) DiscoveryEngineControlConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlConditionsOutputReference <a name="DiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineControlConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">PutActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms">PutQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">ResetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex">ResetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms">ResetQueryTerms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveTimeRange` <a name="PutActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```go
func PutActiveTimeRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryTerms` <a name="PutQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```go
func PutQueryTerms(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActiveTimeRange` <a name="ResetActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```go
func ResetActiveTimeRange()
```

##### `ResetQueryRegex` <a name="ResetQueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```go
func ResetQueryRegex()
```

##### `ResetQueryTerms` <a name="ResetQueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```go
func ResetQueryTerms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">ActiveTimeRange</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms">QueryTerms</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">ActiveTimeRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">QueryRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">QueryTermsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex">QueryRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveTimeRange`<sup>Required</sup> <a name="ActiveTimeRange" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```go
func ActiveTimeRange() DiscoveryEngineControlConditionsActiveTimeRangeList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsActiveTimeRangeList">DiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `QueryTerms`<sup>Required</sup> <a name="QueryTerms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```go
func QueryTerms() DiscoveryEngineControlConditionsQueryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList">DiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `ActiveTimeRangeInput`<sup>Optional</sup> <a name="ActiveTimeRangeInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```go
func ActiveTimeRangeInput() interface{}
```

- *Type:* interface{}

---

##### `QueryRegexInput`<sup>Optional</sup> <a name="QueryRegexInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```go
func QueryRegexInput() *string
```

- *Type:* *string

---

##### `QueryTermsInput`<sup>Optional</sup> <a name="QueryTermsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```go
func QueryTermsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryRegex`<sup>Required</sup> <a name="QueryRegex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```go
func QueryRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlConditionsQueryTermsList <a name="DiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsQueryTermsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DiscoveryEngineControlConditionsQueryTermsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get"></a>

```go
func Get(index *f64) DiscoveryEngineControlConditionsQueryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlConditionsQueryTermsOutputReference <a name="DiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlConditionsQueryTermsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DiscoveryEngineControlConditionsQueryTermsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">ResetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFullMatch` <a name="ResetFullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```go
func ResetFullMatch()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">FullMatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">FullMatch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FullMatchInput`<sup>Optional</sup> <a name="FullMatchInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```go
func FullMatchInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `FullMatch`<sup>Required</sup> <a name="FullMatch" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```go
func FullMatch() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DiscoveryEngineControlFilterActionOutputReference <a name="DiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlFilterActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlFilterActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```go
func DataStoreInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlFilterAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlFilterAction">DiscoveryEngineControlFilterAction</a>

---


### DiscoveryEngineControlPromoteActionOutputReference <a name="DiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlPromoteActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlPromoteActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">PutSearchLinkPromotion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSearchLinkPromotion` <a name="PutSearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```go
func PutSearchLinkPromotion(value DiscoveryEngineControlPromoteActionSearchLinkPromotion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">SearchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">SearchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SearchLinkPromotion`<sup>Required</sup> <a name="SearchLinkPromotion" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```go
func SearchLinkPromotion() DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```go
func DataStoreInput() *string
```

- *Type:* *string

---

##### `SearchLinkPromotionInput`<sup>Optional</sup> <a name="SearchLinkPromotionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```go
func SearchLinkPromotionInput() DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlPromoteAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteAction">DiscoveryEngineControlPromoteAction</a>

---


### DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">ResetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">ResetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocument` <a name="ResetDocument" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```go
func ResetDocument()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetImageUri` <a name="ResetImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```go
func ResetImageUri()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">DocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">Document</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DocumentInput`<sup>Optional</sup> <a name="DocumentInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```go
func DocumentInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```go
func ImageUriInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Document`<sup>Required</sup> <a name="Document" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```go
func Document() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlPromoteActionSearchLinkPromotion
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlPromoteActionSearchLinkPromotion">DiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### DiscoveryEngineControlRedirectActionOutputReference <a name="DiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlRedirectActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlRedirectActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```go
func RedirectUriInput() *string
```

- *Type:* *string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```go
func RedirectUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlRedirectAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlRedirectAction">DiscoveryEngineControlRedirectAction</a>

---


### DiscoveryEngineControlSynonymsActionOutputReference <a name="DiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlSynonymsActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlSynonymsActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">ResetSynonyms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynonyms` <a name="ResetSynonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```go
func ResetSynonyms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">SynonymsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">Synonyms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SynonymsInput`<sup>Optional</sup> <a name="SynonymsInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```go
func SynonymsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Synonyms`<sup>Required</sup> <a name="Synonyms" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```go
func Synonyms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineControlSynonymsAction
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlSynonymsAction">DiscoveryEngineControlSynonymsAction</a>

---


### DiscoveryEngineControlTimeoutsOutputReference <a name="DiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/discoveryenginecontrol"

discoveryenginecontrol.NewDiscoveryEngineControlTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineControlTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.discoveryEngineControl.DiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `dialogflowIntent` Submodule <a name="`dialogflowIntent` Submodule" id="@cdktn/provider-google.dialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowIntent <a name="DialogflowIntent" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.NewDialogflowIntent(scope Construct, id *string, config DialogflowIntentConfig) DialogflowIntent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig">DialogflowIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig">DialogflowIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms">ResetDefaultResponsePlatforms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetEvents">ResetEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames">ResetInputContextNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback">ResetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled">ResetMlDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName">ResetParentFollowupIntentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts">ResetResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState">ResetWebhookState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts"></a>

```go
func PutTimeouts(value DialogflowIntentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetAction"></a>

```go
func ResetAction()
```

##### `ResetDefaultResponsePlatforms` <a name="ResetDefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms"></a>

```go
func ResetDefaultResponsePlatforms()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetEvents"></a>

```go
func ResetEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetId"></a>

```go
func ResetId()
```

##### `ResetInputContextNames` <a name="ResetInputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames"></a>

```go
func ResetInputContextNames()
```

##### `ResetIsFallback` <a name="ResetIsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback"></a>

```go
func ResetIsFallback()
```

##### `ResetMlDisabled` <a name="ResetMlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled"></a>

```go
func ResetMlDisabled()
```

##### `ResetParentFollowupIntentName` <a name="ResetParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName"></a>

```go
func ResetParentFollowupIntentName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetProject"></a>

```go
func ResetProject()
```

##### `ResetResetContexts` <a name="ResetResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts"></a>

```go
func ResetResetContexts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWebhookState` <a name="ResetWebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState"></a>

```go
func ResetWebhookState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowIntent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.DialogflowIntent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.DialogflowIntent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.DialogflowIntent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.DialogflowIntent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DialogflowIntent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DialogflowIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DialogflowIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo">FollowupIntentInfo</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName">RootFollowupIntentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput">DefaultResponsePlatformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput">InputContextNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput">IsFallbackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput">MlDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput">ParentFollowupIntentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput">ResetContextsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput">WebhookStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms">DefaultResponsePlatforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames">InputContextNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback">IsFallback</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled">MlDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts">ResetContexts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState">WebhookState</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FollowupIntentInfo`<sup>Required</sup> <a name="FollowupIntentInfo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo"></a>

```go
func FollowupIntentInfo() DialogflowIntentFollowupIntentInfoList
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RootFollowupIntentName`<sup>Required</sup> <a name="RootFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName"></a>

```go
func RootFollowupIntentName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts"></a>

```go
func Timeouts() DialogflowIntentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DefaultResponsePlatformsInput`<sup>Optional</sup> <a name="DefaultResponsePlatformsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput"></a>

```go
func DefaultResponsePlatformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputContextNamesInput`<sup>Optional</sup> <a name="InputContextNamesInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput"></a>

```go
func InputContextNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsFallbackInput`<sup>Optional</sup> <a name="IsFallbackInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput"></a>

```go
func IsFallbackInput() interface{}
```

- *Type:* interface{}

---

##### `MlDisabledInput`<sup>Optional</sup> <a name="MlDisabledInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput"></a>

```go
func MlDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `ParentFollowupIntentNameInput`<sup>Optional</sup> <a name="ParentFollowupIntentNameInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput"></a>

```go
func ParentFollowupIntentNameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResetContextsInput`<sup>Optional</sup> <a name="ResetContextsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput"></a>

```go
func ResetContextsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookStateInput`<sup>Optional</sup> <a name="WebhookStateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput"></a>

```go
func WebhookStateInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `DefaultResponsePlatforms`<sup>Required</sup> <a name="DefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms"></a>

```go
func DefaultResponsePlatforms() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputContextNames`<sup>Required</sup> <a name="InputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames"></a>

```go
func InputContextNames() *[]*string
```

- *Type:* *[]*string

---

##### `IsFallback`<sup>Required</sup> <a name="IsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback"></a>

```go
func IsFallback() interface{}
```

- *Type:* interface{}

---

##### `MlDisabled`<sup>Required</sup> <a name="MlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled"></a>

```go
func MlDisabled() interface{}
```

- *Type:* interface{}

---

##### `ParentFollowupIntentName`<sup>Required</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName"></a>

```go
func ParentFollowupIntentName() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResetContexts`<sup>Required</sup> <a name="ResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts"></a>

```go
func ResetContexts() interface{}
```

- *Type:* interface{}

---

##### `WebhookState`<sup>Required</sup> <a name="WebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState"></a>

```go
func WebhookState() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowIntentConfig <a name="DialogflowIntentConfig" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

&dialogflowintent.DialogflowIntentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Action: *string,
	DefaultResponsePlatforms: *[]*string,
	DeletionPolicy: *string,
	Events: *[]*string,
	Id: *string,
	InputContextNames: *[]*string,
	IsFallback: interface{},
	MlDisabled: interface{},
	ParentFollowupIntentName: *string,
	Priority: *f64,
	Project: *string,
	ResetContexts: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-google-go/google/v19.dialogflowIntent.DialogflowIntentTimeouts,
	WebhookState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action">Action</a></code> | <code>*string</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms">DefaultResponsePlatforms</a></code> | <code>*[]*string</code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events">Events</a></code> | <code>*[]*string</code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames">InputContextNames</a></code> | <code>*[]*string</code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback">IsFallback</a></code> | <code>interface{}</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled">MlDisabled</a></code> | <code>interface{}</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>*string</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of this intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts">ResetContexts</a></code> | <code>interface{}</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState">WebhookState</a></code> | <code>*string</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#display_name DialogflowIntent#display_name}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#action DialogflowIntent#action}

---

##### `DefaultResponsePlatforms`<sup>Optional</sup> <a name="DefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```go
DefaultResponsePlatforms *[]*string
```

- *Type:* *[]*string

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#deletion_policy DialogflowIntent#deletion_policy}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#events DialogflowIntent#events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputContextNames`<sup>Optional</sup> <a name="InputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames"></a>

```go
InputContextNames *[]*string
```

- *Type:* *[]*string

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}

---

##### `IsFallback`<sup>Optional</sup> <a name="IsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback"></a>

```go
IsFallback interface{}
```

- *Type:* interface{}

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}

---

##### `MlDisabled`<sup>Optional</sup> <a name="MlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled"></a>

```go
MlDisabled interface{}
```

- *Type:* interface{}

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}

---

##### `ParentFollowupIntentName`<sup>Optional</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName"></a>

```go
ParentFollowupIntentName *string
```

- *Type:* *string

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#priority DialogflowIntent#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}.

---

##### `ResetContexts`<sup>Optional</sup> <a name="ResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts"></a>

```go
ResetContexts interface{}
```

- *Type:* interface{}

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts"></a>

```go
Timeouts DialogflowIntentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#timeouts DialogflowIntent#timeouts}

---

##### `WebhookState`<sup>Optional</sup> <a name="WebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState"></a>

```go
WebhookState *string
```

- *Type:* *string

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}

---

### DialogflowIntentFollowupIntentInfo <a name="DialogflowIntentFollowupIntentInfo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

&dialogflowintent.DialogflowIntentFollowupIntentInfo {

}
```


### DialogflowIntentTimeouts <a name="DialogflowIntentTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

&dialogflowintent.DialogflowIntentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowIntentFollowupIntentInfoList <a name="DialogflowIntentFollowupIntentInfoList" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.NewDialogflowIntentFollowupIntentInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DialogflowIntentFollowupIntentInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get"></a>

```go
func Get(index *f64) DialogflowIntentFollowupIntentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DialogflowIntentFollowupIntentInfoOutputReference <a name="DialogflowIntentFollowupIntentInfoOutputReference" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.NewDialogflowIntentFollowupIntentInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DialogflowIntentFollowupIntentInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">FollowupIntentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FollowupIntentName`<sup>Required</sup> <a name="FollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```go
func FollowupIntentName() *string
```

- *Type:* *string

---

##### `ParentFollowupIntentName`<sup>Required</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```go
func ParentFollowupIntentName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DialogflowIntentFollowupIntentInfo
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a>

---


### DialogflowIntentTimeoutsOutputReference <a name="DialogflowIntentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-google-go/google/v19/dialogflowintent"

dialogflowintent.NewDialogflowIntentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DialogflowIntentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




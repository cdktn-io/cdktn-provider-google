# `dialogflowIntent` Submodule <a name="`dialogflowIntent` Submodule" id="@cdktn/provider-google.dialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowIntent <a name="DialogflowIntent" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntent(Construct Scope, string Id, DialogflowIntentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig">DialogflowIntentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowIntentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDefaultResponsePlatforms` <a name="ResetDefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms"></a>

```csharp
private void ResetDefaultResponsePlatforms()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetEvents"></a>

```csharp
private void ResetEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputContextNames` <a name="ResetInputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames"></a>

```csharp
private void ResetInputContextNames()
```

##### `ResetIsFallback` <a name="ResetIsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback"></a>

```csharp
private void ResetIsFallback()
```

##### `ResetMlDisabled` <a name="ResetMlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled"></a>

```csharp
private void ResetMlDisabled()
```

##### `ResetParentFollowupIntentName` <a name="ResetParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName"></a>

```csharp
private void ResetParentFollowupIntentName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResetContexts` <a name="ResetResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts"></a>

```csharp
private void ResetResetContexts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebhookState` <a name="ResetWebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState"></a>

```csharp
private void ResetWebhookState()
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

```csharp
using Io.Cdktn.Providers.Google;

DialogflowIntent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowIntent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowIntent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowIntent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DialogflowIntent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowIntent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo">FollowupIntentInfo</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName">RootFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput">DefaultResponsePlatformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput">InputContextNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput">IsFallbackInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput">MlDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput">ParentFollowupIntentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput">ResetContextsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput">WebhookStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms">DefaultResponsePlatforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames">InputContextNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback">IsFallback</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled">MlDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts">ResetContexts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState">WebhookState</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FollowupIntentInfo`<sup>Required</sup> <a name="FollowupIntentInfo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo"></a>

```csharp
public DialogflowIntentFollowupIntentInfoList FollowupIntentInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RootFollowupIntentName`<sup>Required</sup> <a name="RootFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName"></a>

```csharp
public string RootFollowupIntentName { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts"></a>

```csharp
public DialogflowIntentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DefaultResponsePlatformsInput`<sup>Optional</sup> <a name="DefaultResponsePlatformsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput"></a>

```csharp
public string[] DefaultResponsePlatformsInput { get; }
```

- *Type:* string[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputContextNamesInput`<sup>Optional</sup> <a name="InputContextNamesInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput"></a>

```csharp
public string[] InputContextNamesInput { get; }
```

- *Type:* string[]

---

##### `IsFallbackInput`<sup>Optional</sup> <a name="IsFallbackInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput"></a>

```csharp
public bool|IResolvable IsFallbackInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MlDisabledInput`<sup>Optional</sup> <a name="MlDisabledInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput"></a>

```csharp
public bool|IResolvable MlDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParentFollowupIntentNameInput`<sup>Optional</sup> <a name="ParentFollowupIntentNameInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput"></a>

```csharp
public string ParentFollowupIntentNameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResetContextsInput`<sup>Optional</sup> <a name="ResetContextsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput"></a>

```csharp
public bool|IResolvable ResetContextsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput"></a>

```csharp
public IResolvable|DialogflowIntentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `WebhookStateInput`<sup>Optional</sup> <a name="WebhookStateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput"></a>

```csharp
public string WebhookStateInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `DefaultResponsePlatforms`<sup>Required</sup> <a name="DefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms"></a>

```csharp
public string[] DefaultResponsePlatforms { get; }
```

- *Type:* string[]

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputContextNames`<sup>Required</sup> <a name="InputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames"></a>

```csharp
public string[] InputContextNames { get; }
```

- *Type:* string[]

---

##### `IsFallback`<sup>Required</sup> <a name="IsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback"></a>

```csharp
public bool|IResolvable IsFallback { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MlDisabled`<sup>Required</sup> <a name="MlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled"></a>

```csharp
public bool|IResolvable MlDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParentFollowupIntentName`<sup>Required</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName"></a>

```csharp
public string ParentFollowupIntentName { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResetContexts`<sup>Required</sup> <a name="ResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts"></a>

```csharp
public bool|IResolvable ResetContexts { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WebhookState`<sup>Required</sup> <a name="WebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState"></a>

```csharp
public string WebhookState { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowIntentConfig <a name="DialogflowIntentConfig" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Action = null,
    string[] DefaultResponsePlatforms = null,
    string DeletionPolicy = null,
    string[] Events = null,
    string Id = null,
    string[] InputContextNames = null,
    bool|IResolvable IsFallback = null,
    bool|IResolvable MlDisabled = null,
    string ParentFollowupIntentName = null,
    double Priority = null,
    string Project = null,
    bool|IResolvable ResetContexts = null,
    DialogflowIntentTimeouts Timeouts = null,
    string WebhookState = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action">Action</a></code> | <code>string</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms">DefaultResponsePlatforms</a></code> | <code>string[]</code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events">Events</a></code> | <code>string[]</code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#id DialogflowIntent#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames">InputContextNames</a></code> | <code>string[]</code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback">IsFallback</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled">MlDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>string</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of this intent. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#project DialogflowIntent#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts">ResetContexts</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState">WebhookState</a></code> | <code>string</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#display_name DialogflowIntent#display_name}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#action DialogflowIntent#action}

---

##### `DefaultResponsePlatforms`<sup>Optional</sup> <a name="DefaultResponsePlatforms" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```csharp
public string[] DefaultResponsePlatforms { get; set; }
```

- *Type:* string[]

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#deletion_policy DialogflowIntent#deletion_policy}

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#events DialogflowIntent#events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#id DialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputContextNames`<sup>Optional</sup> <a name="InputContextNames" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames"></a>

```csharp
public string[] InputContextNames { get; set; }
```

- *Type:* string[]

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}

---

##### `IsFallback`<sup>Optional</sup> <a name="IsFallback" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback"></a>

```csharp
public bool|IResolvable IsFallback { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}

---

##### `MlDisabled`<sup>Optional</sup> <a name="MlDisabled" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled"></a>

```csharp
public bool|IResolvable MlDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}

---

##### `ParentFollowupIntentName`<sup>Optional</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName"></a>

```csharp
public string ParentFollowupIntentName { get; set; }
```

- *Type:* string

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of this intent.

Higher numbers represent higher priorities.

* If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
* If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#priority DialogflowIntent#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#project DialogflowIntent#project}.

---

##### `ResetContexts`<sup>Optional</sup> <a name="ResetContexts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts"></a>

```csharp
public bool|IResolvable ResetContexts { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts"></a>

```csharp
public DialogflowIntentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#timeouts DialogflowIntent#timeouts}

---

##### `WebhookState`<sup>Optional</sup> <a name="WebhookState" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState"></a>

```csharp
public string WebhookState { get; set; }
```

- *Type:* string

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
  filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}

---

### DialogflowIntentFollowupIntentInfo <a name="DialogflowIntentFollowupIntentInfo" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentFollowupIntentInfo {

};
```


### DialogflowIntentTimeouts <a name="DialogflowIntentTimeouts" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#create DialogflowIntent#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#update DialogflowIntent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#create DialogflowIntent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/dialogflow_intent#update DialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowIntentFollowupIntentInfoList <a name="DialogflowIntentFollowupIntentInfoList" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentFollowupIntentInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get"></a>

```csharp
private DialogflowIntentFollowupIntentInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DialogflowIntentFollowupIntentInfoOutputReference <a name="DialogflowIntentFollowupIntentInfoOutputReference" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentFollowupIntentInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">FollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">ParentFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FollowupIntentName`<sup>Required</sup> <a name="FollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```csharp
public string FollowupIntentName { get; }
```

- *Type:* string

---

##### `ParentFollowupIntentName`<sup>Required</sup> <a name="ParentFollowupIntentName" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```csharp
public string ParentFollowupIntentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```csharp
public DialogflowIntentFollowupIntentInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a>

---


### DialogflowIntentTimeoutsOutputReference <a name="DialogflowIntentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowIntentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowIntentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---




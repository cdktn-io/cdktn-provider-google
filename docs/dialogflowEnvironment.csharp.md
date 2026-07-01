# `dialogflowEnvironment` Submodule <a name="`dialogflowEnvironment` Submodule" id="@cdktn/provider-google.dialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowEnvironment <a name="DialogflowEnvironment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironment(Construct Scope, string Id, DialogflowEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig">DialogflowEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig">DialogflowEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment">PutFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings">PutTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment">ResetFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings">ResetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFulfillment` <a name="PutFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment"></a>

```csharp
private void PutFulfillment(DialogflowEnvironmentFulfillment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---

##### `PutTextToSpeechSettings` <a name="PutTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings"></a>

```csharp
private void PutTextToSpeechSettings(DialogflowEnvironmentTextToSpeechSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion"></a>

```csharp
private void ResetAgentVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFulfillment` <a name="ResetFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment"></a>

```csharp
private void ResetFulfillment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTextToSpeechSettings` <a name="ResetTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings"></a>

```csharp
private void ResetTextToSpeechSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DialogflowEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment">Fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput">AgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput">EnvironmentidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput">FulfillmentInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput">TextToSpeechSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid">Environmentid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Fulfillment`<sup>Required</sup> <a name="Fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment"></a>

```csharp
public DialogflowEnvironmentFulfillmentOutputReference Fulfillment { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TextToSpeechSettings`<sup>Required</sup> <a name="TextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsOutputReference TextToSpeechSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts"></a>

```csharp
public DialogflowEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput"></a>

```csharp
public string AgentVersionInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentidInput`<sup>Optional</sup> <a name="EnvironmentidInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput"></a>

```csharp
public string EnvironmentidInput { get; }
```

- *Type:* string

---

##### `FulfillmentInput`<sup>Optional</sup> <a name="FulfillmentInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput"></a>

```csharp
public DialogflowEnvironmentFulfillment FulfillmentInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TextToSpeechSettingsInput`<sup>Optional</sup> <a name="TextToSpeechSettingsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettings TextToSpeechSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput"></a>

```csharp
public IResolvable|DialogflowEnvironmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environmentid`<sup>Required</sup> <a name="Environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid"></a>

```csharp
public string Environmentid { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowEnvironmentConfig <a name="DialogflowEnvironmentConfig" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environmentid,
    string AgentVersion = null,
    string DeletionPolicy = null,
    string Description = null,
    DialogflowEnvironmentFulfillment Fulfillment = null,
    string Id = null,
    string Location = null,
    string Project = null,
    DialogflowEnvironmentTextToSpeechSettings TextToSpeechSettings = null,
    DialogflowEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid">Environmentid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion">AgentVersion</a></code> | <code>string</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment">Fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Environmentid`<sup>Required</sup> <a name="Environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid"></a>

```csharp
public string Environmentid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}.

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion"></a>

```csharp
public string AgentVersion { get; set; }
```

- *Type:* string

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}

---

##### `Fulfillment`<sup>Optional</sup> <a name="Fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment"></a>

```csharp
public DialogflowEnvironmentFulfillment Fulfillment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}.

---

##### `TextToSpeechSettings`<sup>Optional</sup> <a name="TextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettings TextToSpeechSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts"></a>

```csharp
public DialogflowEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}

---

### DialogflowEnvironmentFulfillment <a name="DialogflowEnvironmentFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillment {
    string DisplayName = null,
    IResolvable|DialogflowEnvironmentFulfillmentFeatures[] Features = null,
    DialogflowEnvironmentFulfillmentGenericWebService GenericWebService = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features">Features</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]</code> | features block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name">Name</a></code> | <code>string</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#display_name DialogflowEnvironment#display_name}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features"></a>

```csharp
public IResolvable|DialogflowEnvironmentFulfillmentFeatures[] Features { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#features DialogflowEnvironment#features}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService"></a>

```csharp
public DialogflowEnvironmentFulfillmentGenericWebService GenericWebService { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#generic_web_service DialogflowEnvironment#generic_web_service}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

### DialogflowEnvironmentFulfillmentFeatures <a name="DialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentFeatures {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type">Type</a></code> | <code>string</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#type DialogflowEnvironment#type}

---

### DialogflowEnvironmentFulfillmentGenericWebService <a name="DialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentGenericWebService {
    string Uri,
    string Password = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri">Uri</a></code> | <code>string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password">Password</a></code> | <code>string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username">Username</a></code> | <code>string</code> | The user name for HTTP Basic authentication. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#uri DialogflowEnvironment#uri}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#password DialogflowEnvironment#password}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#request_headers DialogflowEnvironment#request_headers}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#username DialogflowEnvironment#username}

---

### DialogflowEnvironmentTextToSpeechSettings <a name="DialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettings {
    bool|IResolvable EnableTextToSpeech = null,
    string OutputAudioEncoding = null,
    double SampleRateHertz = null,
    IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] SynthesizeSpeechConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">EnableTextToSpeech</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">OutputAudioEncoding</a></code> | <code>string</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | synthesize_speech_configs block. |

---

##### `EnableTextToSpeech`<sup>Optional</sup> <a name="EnableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```csharp
public bool|IResolvable EnableTextToSpeech { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#enable_text_to_speech DialogflowEnvironment#enable_text_to_speech}

---

##### `OutputAudioEncoding`<sup>Optional</sup> <a name="OutputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```csharp
public string OutputAudioEncoding { get; set; }
```

- *Type:* string

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#output_audio_encoding DialogflowEnvironment#output_audio_encoding}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; set; }
```

- *Type:* double

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#sample_rate_hertz DialogflowEnvironment#sample_rate_hertz}

---

##### `SynthesizeSpeechConfigs`<sup>Optional</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```csharp
public IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] SynthesizeSpeechConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#synthesize_speech_configs DialogflowEnvironment#synthesize_speech_configs}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs {
    string Language,
    string[] EffectsProfileId = null,
    double Pitch = null,
    double SpeakingRate = null,
    DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice Voice = null,
    double VolumeGainDb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">EffectsProfileId</a></code> | <code>string[]</code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">Pitch</a></code> | <code>double</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">SpeakingRate</a></code> | <code>double</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">VolumeGainDb</a></code> | <code>double</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}.

---

##### `EffectsProfileId`<sup>Optional</sup> <a name="EffectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```csharp
public string[] EffectsProfileId { get; set; }
```

- *Type:* string[]

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#effects_profile_id DialogflowEnvironment#effects_profile_id}

---

##### `Pitch`<sup>Optional</sup> <a name="Pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```csharp
public double Pitch { get; set; }
```

- *Type:* double

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#pitch DialogflowEnvironment#pitch}

---

##### `SpeakingRate`<sup>Optional</sup> <a name="SpeakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```csharp
public double SpeakingRate { get; set; }
```

- *Type:* double

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#speaking_rate DialogflowEnvironment#speaking_rate}

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice Voice { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#voice DialogflowEnvironment#voice}

---

##### `VolumeGainDb`<sup>Optional</sup> <a name="VolumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```csharp
public double VolumeGainDb { get; set; }
```

- *Type:* double

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#volume_gain_db DialogflowEnvironment#volume_gain_db}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice {
    string Name = null,
    string SsmlGender = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">Name</a></code> | <code>string</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">SsmlGender</a></code> | <code>string</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

##### `SsmlGender`<sup>Optional</sup> <a name="SsmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```csharp
public string SsmlGender { get; set; }
```

- *Type:* string

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#ssml_gender DialogflowEnvironment#ssml_gender}

---

### DialogflowEnvironmentTimeouts <a name="DialogflowEnvironmentTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowEnvironmentFulfillmentFeaturesList <a name="DialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```csharp
private DialogflowEnvironmentFulfillmentFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowEnvironmentFulfillmentFeatures[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]

---


### DialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="DialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowEnvironmentFulfillmentFeatures InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>

---


### DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```csharp
public DialogflowEnvironmentFulfillmentGenericWebService InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---


### DialogflowEnvironmentFulfillmentOutputReference <a name="DialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentFulfillmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFeatures` <a name="PutFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```csharp
private void PutFeatures(IResolvable|DialogflowEnvironmentFulfillmentFeatures[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```csharp
private void PutGenericWebService(DialogflowEnvironmentFulfillmentGenericWebService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```csharp
private void ResetFeatures()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```csharp
private void ResetGenericWebService()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features">Features</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">FeaturesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```csharp
public DialogflowEnvironmentFulfillmentFeaturesList Features { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```csharp
public DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference GenericWebService { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```csharp
public IResolvable|DialogflowEnvironmentFulfillmentFeatures[] FeaturesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>[]

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```csharp
public DialogflowEnvironmentFulfillmentGenericWebService GenericWebServiceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```csharp
public DialogflowEnvironmentFulfillment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---


### DialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">PutSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">ResetEnableTextToSpeech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">ResetOutputAudioEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">ResetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSynthesizeSpeechConfigs` <a name="PutSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```csharp
private void PutSynthesizeSpeechConfigs(IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---

##### `ResetEnableTextToSpeech` <a name="ResetEnableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```csharp
private void ResetEnableTextToSpeech()
```

##### `ResetOutputAudioEncoding` <a name="ResetOutputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```csharp
private void ResetOutputAudioEncoding()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```csharp
private void ResetSampleRateHertz()
```

##### `ResetSynthesizeSpeechConfigs` <a name="ResetSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```csharp
private void ResetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">EnableTextToSpeechInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">OutputAudioEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">SynthesizeSpeechConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">EnableTextToSpeech</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">OutputAudioEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynthesizeSpeechConfigs`<sup>Required</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList SynthesizeSpeechConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `EnableTextToSpeechInput`<sup>Optional</sup> <a name="EnableTextToSpeechInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```csharp
public bool|IResolvable EnableTextToSpeechInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputAudioEncodingInput`<sup>Optional</sup> <a name="OutputAudioEncodingInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```csharp
public string OutputAudioEncodingInput { get; }
```

- *Type:* string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```csharp
public double SampleRateHertzInput { get; }
```

- *Type:* double

---

##### `SynthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="SynthesizeSpeechConfigsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```csharp
public IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] SynthesizeSpeechConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---

##### `EnableTextToSpeech`<sup>Required</sup> <a name="EnableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```csharp
public bool|IResolvable EnableTextToSpeech { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OutputAudioEncoding`<sup>Required</sup> <a name="OutputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```csharp
public string OutputAudioEncoding { get; }
```

- *Type:* string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```csharp
private DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```csharp
public IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">PutVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">ResetEffectsProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">ResetPitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">ResetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">ResetVolumeGainDb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVoice` <a name="PutVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```csharp
private void PutVoice(DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `ResetEffectsProfileId` <a name="ResetEffectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```csharp
private void ResetEffectsProfileId()
```

##### `ResetPitch` <a name="ResetPitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```csharp
private void ResetPitch()
```

##### `ResetSpeakingRate` <a name="ResetSpeakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```csharp
private void ResetSpeakingRate()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```csharp
private void ResetVoice()
```

##### `ResetVolumeGainDb` <a name="ResetVolumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```csharp
private void ResetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">Voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">EffectsProfileIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">PitchInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">SpeakingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">VoiceInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">VolumeGainDbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">EffectsProfileId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">Pitch</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">SpeakingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">VolumeGainDb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference Voice { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `EffectsProfileIdInput`<sup>Optional</sup> <a name="EffectsProfileIdInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```csharp
public string[] EffectsProfileIdInput { get; }
```

- *Type:* string[]

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `PitchInput`<sup>Optional</sup> <a name="PitchInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```csharp
public double PitchInput { get; }
```

- *Type:* double

---

##### `SpeakingRateInput`<sup>Optional</sup> <a name="SpeakingRateInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```csharp
public double SpeakingRateInput { get; }
```

- *Type:* double

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice VoiceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `VolumeGainDbInput`<sup>Optional</sup> <a name="VolumeGainDbInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```csharp
public double VolumeGainDbInput { get; }
```

- *Type:* double

---

##### `EffectsProfileId`<sup>Required</sup> <a name="EffectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```csharp
public string[] EffectsProfileId { get; }
```

- *Type:* string[]

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Pitch`<sup>Required</sup> <a name="Pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```csharp
public double Pitch { get; }
```

- *Type:* double

---

##### `SpeakingRate`<sup>Required</sup> <a name="SpeakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```csharp
public double SpeakingRate { get; }
```

- *Type:* double

---

##### `VolumeGainDb`<sup>Required</sup> <a name="VolumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```csharp
public double VolumeGainDb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">ResetSsmlGender</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSsmlGender` <a name="ResetSsmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```csharp
private void ResetSsmlGender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">SsmlGenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">SsmlGender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SsmlGenderInput`<sup>Optional</sup> <a name="SsmlGenderInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```csharp
public string SsmlGenderInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SsmlGender`<sup>Required</sup> <a name="SsmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```csharp
public string SsmlGender { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```csharp
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### DialogflowEnvironmentTimeoutsOutputReference <a name="DialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DialogflowEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DialogflowEnvironmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---




# `loggingSavedQuery` Submodule <a name="`loggingSavedQuery` Submodule" id="@cdktn/provider-google.loggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingSavedQuery <a name="LoggingSavedQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQuery(Construct Scope, string Id, LoggingSavedQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig">LoggingSavedQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig">LoggingSavedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery">PutLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery">PutOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery">ResetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery">ResetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingQuery` <a name="PutLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery"></a>

```csharp
private void PutLoggingQuery(LoggingSavedQueryLoggingQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `PutOpsAnalyticsQuery` <a name="PutOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery"></a>

```csharp
private void PutOpsAnalyticsQuery(LoggingSavedQueryOpsAnalyticsQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts"></a>

```csharp
private void PutTimeouts(LoggingSavedQueryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingQuery` <a name="ResetLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery"></a>

```csharp
private void ResetLoggingQuery()
```

##### `ResetOpsAnalyticsQuery` <a name="ResetOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```csharp
private void ResetOpsAnalyticsQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingSavedQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingSavedQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingSavedQuery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingSavedQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingSavedQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput">LoggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput">OpsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LoggingQuery`<sup>Required</sup> <a name="LoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery"></a>

```csharp
public LoggingSavedQueryLoggingQueryOutputReference LoggingQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `OpsAnalyticsQuery`<sup>Required</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery"></a>

```csharp
public LoggingSavedQueryOpsAnalyticsQueryOutputReference OpsAnalyticsQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts"></a>

```csharp
public LoggingSavedQueryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingQueryInput`<sup>Optional</sup> <a name="LoggingQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput"></a>

```csharp
public LoggingSavedQueryLoggingQuery LoggingQueryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpsAnalyticsQueryInput`<sup>Optional</sup> <a name="OpsAnalyticsQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```csharp
public LoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQueryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput"></a>

```csharp
public IResolvable|LoggingSavedQueryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingSavedQueryConfig <a name="LoggingSavedQueryConfig" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Location,
    string Name,
    string Parent,
    string Visibility,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    LoggingSavedQueryLoggingQuery LoggingQuery = null,
    LoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQuery = null,
    LoggingSavedQueryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name">Name</a></code> | <code>string</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description">Description</a></code> | <code>string</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingQuery`<sup>Optional</sup> <a name="LoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery"></a>

```csharp
public LoggingSavedQueryLoggingQuery LoggingQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `OpsAnalyticsQuery`<sup>Optional</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```csharp
public LoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts"></a>

```csharp
public LoggingSavedQueryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

### LoggingSavedQueryLoggingQuery <a name="LoggingSavedQueryLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryLoggingQuery {
    string Filter,
    double SummaryFieldEnd = null,
    IResolvable|LoggingSavedQueryLoggingQuerySummaryFields[] SummaryFields = null,
    double SummaryFieldStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter">Filter</a></code> | <code>string</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>double</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields">SummaryFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>double</code> | Characters will be counted from the start of the string. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}

---

##### `SummaryFieldEnd`<sup>Optional</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```csharp
public double SummaryFieldEnd { get; set; }
```

- *Type:* double

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}

---

##### `SummaryFields`<sup>Optional</sup> <a name="SummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```csharp
public IResolvable|LoggingSavedQueryLoggingQuerySummaryFields[] SummaryFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}

---

##### `SummaryFieldStart`<sup>Optional</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```csharp
public double SummaryFieldStart { get; set; }
```

- *Type:* double

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}

---

### LoggingSavedQueryLoggingQuerySummaryFields <a name="LoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryLoggingQuerySummaryFields {
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field">Field</a></code> | <code>string</code> | The field from the LogEntry to include in the summary line. |

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#field LoggingSavedQuery#field}

---

### LoggingSavedQueryOpsAnalyticsQuery <a name="LoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryOpsAnalyticsQuery {
    string SqlQueryText
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">SqlQueryText</a></code> | <code>string</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```csharp
public string SqlQueryText { get; set; }
```

- *Type:* string

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}

---

### LoggingSavedQueryTimeouts <a name="LoggingSavedQueryTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingSavedQueryLoggingQueryOutputReference <a name="LoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryLoggingQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">PutSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">ResetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">ResetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">ResetSummaryFieldStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummaryFields` <a name="PutSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```csharp
private void PutSummaryFields(IResolvable|LoggingSavedQueryLoggingQuerySummaryFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `ResetSummaryFieldEnd` <a name="ResetSummaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```csharp
private void ResetSummaryFieldEnd()
```

##### `ResetSummaryFields` <a name="ResetSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```csharp
private void ResetSummaryFields()
```

##### `ResetSummaryFieldStart` <a name="ResetSummaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```csharp
private void ResetSummaryFieldStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">SummaryFields</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">SummaryFieldEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">SummaryFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">SummaryFieldStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummaryFields`<sup>Required</sup> <a name="SummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```csharp
public LoggingSavedQueryLoggingQuerySummaryFieldsList SummaryFields { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `SummaryFieldEndInput`<sup>Optional</sup> <a name="SummaryFieldEndInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```csharp
public double SummaryFieldEndInput { get; }
```

- *Type:* double

---

##### `SummaryFieldsInput`<sup>Optional</sup> <a name="SummaryFieldsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```csharp
public IResolvable|LoggingSavedQueryLoggingQuerySummaryFields[] SummaryFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `SummaryFieldStartInput`<sup>Optional</sup> <a name="SummaryFieldStartInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```csharp
public double SummaryFieldStartInput { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `SummaryFieldEnd`<sup>Required</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```csharp
public double SummaryFieldEnd { get; }
```

- *Type:* double

---

##### `SummaryFieldStart`<sup>Required</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```csharp
public double SummaryFieldStart { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```csharp
public LoggingSavedQueryLoggingQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---


### LoggingSavedQueryLoggingQuerySummaryFieldsList <a name="LoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryLoggingQuerySummaryFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```csharp
private LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```csharp
public IResolvable|LoggingSavedQueryLoggingQuerySummaryFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---


### LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetField` <a name="ResetField" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoggingSavedQueryLoggingQuerySummaryFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>

---


### LoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="LoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryOpsAnalyticsQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">SqlQueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">SqlQueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlQueryTextInput`<sup>Optional</sup> <a name="SqlQueryTextInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```csharp
public string SqlQueryTextInput { get; }
```

- *Type:* string

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```csharp
public string SqlQueryText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```csharp
public LoggingSavedQueryOpsAnalyticsQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---


### LoggingSavedQueryTimeoutsOutputReference <a name="LoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingSavedQueryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoggingSavedQueryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---




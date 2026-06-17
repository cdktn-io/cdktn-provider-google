# `loggingBillingAccountSink` Submodule <a name="`loggingBillingAccountSink` Submodule" id="@cdktn/provider-google.loggingBillingAccountSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountSink <a name="LoggingBillingAccountSink" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink google_logging_billing_account_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSink(Construct Scope, string Id, LoggingBillingAccountSinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig">LoggingBillingAccountSinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig">LoggingBillingAccountSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions">PutBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetBigqueryOptions">ResetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryOptions` <a name="PutBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions"></a>

```csharp
private void PutBigqueryOptions(LoggingBillingAccountSinkBigqueryOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---

##### `PutExclusions` <a name="PutExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions"></a>

```csharp
private void PutExclusions(IResolvable|LoggingBillingAccountSinkExclusions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---

##### `ResetBigqueryOptions` <a name="ResetBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetBigqueryOptions"></a>

```csharp
private void ResetBigqueryOptions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingBillingAccountSink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingBillingAccountSink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingBillingAccountSink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingBillingAccountSink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

LoggingBillingAccountSink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LoggingBillingAccountSink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingBillingAccountSink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingBillingAccountSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LoggingBillingAccountSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference">LoggingBillingAccountSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList">LoggingBillingAccountSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.writerIdentity">WriterIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptionsInput">BigqueryOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccountInput">BillingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusionsInput">ExclusionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccount">BillingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BigqueryOptions`<sup>Required</sup> <a name="BigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptions"></a>

```csharp
public LoggingBillingAccountSinkBigqueryOptionsOutputReference BigqueryOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference">LoggingBillingAccountSinkBigqueryOptionsOutputReference</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusions"></a>

```csharp
public LoggingBillingAccountSinkExclusionsList Exclusions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList">LoggingBillingAccountSinkExclusionsList</a>

---

##### `WriterIdentity`<sup>Required</sup> <a name="WriterIdentity" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.writerIdentity"></a>

```csharp
public string WriterIdentity { get; }
```

- *Type:* string

---

##### `BigqueryOptionsInput`<sup>Optional</sup> <a name="BigqueryOptionsInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptionsInput"></a>

```csharp
public LoggingBillingAccountSinkBigqueryOptions BigqueryOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccountInput"></a>

```csharp
public string BillingAccountInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusionsInput"></a>

```csharp
public IResolvable|LoggingBillingAccountSinkExclusions[] ExclusionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccount"></a>

```csharp
public string BillingAccount { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountSinkBigqueryOptions <a name="LoggingBillingAccountSinkBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkBigqueryOptions {
    bool|IResolvable UsePartitionedTables
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables"></a>

```csharp
public bool|IResolvable UsePartitionedTables { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#use_partitioned_tables LoggingBillingAccountSink#use_partitioned_tables}

---

### LoggingBillingAccountSinkConfig <a name="LoggingBillingAccountSinkConfig" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BillingAccount,
    string Destination,
    string Name,
    LoggingBillingAccountSinkBigqueryOptions BigqueryOptions = null,
    string DeletionPolicy = null,
    string Description = null,
    bool|IResolvable Disabled = null,
    IResolvable|LoggingBillingAccountSinkExclusions[] Exclusions = null,
    string Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.billingAccount">BillingAccount</a></code> | <code>string</code> | The billing account exported to the sink. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.destination">Destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.name">Name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.bigqueryOptions">BigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.description">Description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.exclusions">Exclusions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | exclusions block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.filter">Filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#id LoggingBillingAccountSink#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.billingAccount"></a>

```csharp
public string BillingAccount { get; set; }
```

- *Type:* string

The billing account exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#billing_account LoggingBillingAccountSink#billing_account}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#destination LoggingBillingAccountSink#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#name LoggingBillingAccountSink#name}

---

##### `BigqueryOptions`<sup>Optional</sup> <a name="BigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.bigqueryOptions"></a>

```csharp
public LoggingBillingAccountSinkBigqueryOptions BigqueryOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#bigquery_options LoggingBillingAccountSink#bigquery_options}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#deletion_policy LoggingBillingAccountSink#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#description LoggingBillingAccountSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#disabled LoggingBillingAccountSink#disabled}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.exclusions"></a>

```csharp
public IResolvable|LoggingBillingAccountSinkExclusions[] Exclusions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#exclusions LoggingBillingAccountSink#exclusions}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#filter LoggingBillingAccountSink#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#id LoggingBillingAccountSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoggingBillingAccountSinkExclusions <a name="LoggingBillingAccountSinkExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkExclusions {
    string Filter,
    string Name,
    string Description = null,
    bool|IResolvable Disabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.filter">Filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.name">Name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.description">Description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#filter LoggingBillingAccountSink#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#name LoggingBillingAccountSink#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#description LoggingBillingAccountSink#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/logging_billing_account_sink#disabled LoggingBillingAccountSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingBillingAccountSinkBigqueryOptionsOutputReference <a name="LoggingBillingAccountSinkBigqueryOptionsOutputReference" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkBigqueryOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">UsePartitionedTablesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables">UsePartitionedTables</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UsePartitionedTablesInput`<sup>Optional</sup> <a name="UsePartitionedTablesInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```csharp
public bool|IResolvable UsePartitionedTablesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UsePartitionedTables`<sup>Required</sup> <a name="UsePartitionedTables" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```csharp
public bool|IResolvable UsePartitionedTables { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```csharp
public LoggingBillingAccountSinkBigqueryOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---


### LoggingBillingAccountSinkExclusionsList <a name="LoggingBillingAccountSinkExclusionsList" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkExclusionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get"></a>

```csharp
private LoggingBillingAccountSinkExclusionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.internalValue"></a>

```csharp
public IResolvable|LoggingBillingAccountSinkExclusions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---


### LoggingBillingAccountSinkExclusionsOutputReference <a name="LoggingBillingAccountSinkExclusionsOutputReference" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new LoggingBillingAccountSinkExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|LoggingBillingAccountSinkExclusions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>

---




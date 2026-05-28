# `contactCenterInsightsQaQuestion` Submodule <a name="`contactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaQuestion <a name="ContactCenterInsightsQaQuestion" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestion(Construct Scope, string Id, ContactCenterInsightsQaQuestionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices">PutAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">PutPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions">PutQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata">PutTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation">ResetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices">ResetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions">ResetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics">ResetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">ResetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">ResetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody">ResetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType">ResetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata">ResetTuningMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnswerChoices` <a name="PutAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```csharp
private void PutAnswerChoices(IResolvable|ContactCenterInsightsQaQuestionAnswerChoices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics"></a>

```csharp
private void PutMetrics(ContactCenterInsightsQaQuestionMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `PutPredefinedQuestionConfig` <a name="PutPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```csharp
private void PutPredefinedQuestionConfig(ContactCenterInsightsQaQuestionPredefinedQuestionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `PutQaQuestionDataOptions` <a name="PutQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```csharp
private void PutQaQuestionDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts"></a>

```csharp
private void PutTimeouts(ContactCenterInsightsQaQuestionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `PutTuningMetadata` <a name="PutTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```csharp
private void PutTuningMetadata(ContactCenterInsightsQaQuestionTuningMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `ResetAbbreviation` <a name="ResetAbbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```csharp
private void ResetAbbreviation()
```

##### `ResetAnswerChoices` <a name="ResetAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```csharp
private void ResetAnswerChoices()
```

##### `ResetAnswerInstructions` <a name="ResetAnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```csharp
private void ResetAnswerInstructions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics"></a>

```csharp
private void ResetMetrics()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetPredefinedQuestionConfig` <a name="ResetPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```csharp
private void ResetPredefinedQuestionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQaQuestionDataOptions` <a name="ResetQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```csharp
private void ResetQaQuestionDataOptions()
```

##### `ResetQuestionBody` <a name="ResetQuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```csharp
private void ResetQuestionBody()
```

##### `ResetQuestionType` <a name="ResetQuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType"></a>

```csharp
private void ResetQuestionType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTuningMetadata` <a name="ResetTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```csharp
private void ResetTuningMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaQuestion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaQuestion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaQuestion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ContactCenterInsightsQaQuestion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsQaQuestion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices">AnswerChoices</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput">AbbreviationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput">AnswerChoicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput">AnswerInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput">MetricsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput">OrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">PredefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">QaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput">QaScorecardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput">QuestionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput">QuestionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput">RevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput">TuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation">Abbreviation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions">AnswerInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order">Order</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody">QuestionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType">QuestionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision">Revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnswerChoices`<sup>Required</sup> <a name="AnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices"></a>

```csharp
public ContactCenterInsightsQaQuestionAnswerChoicesList AnswerChoices { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics"></a>

```csharp
public ContactCenterInsightsQaQuestionMetricsOutputReference Metrics { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PredefinedQuestionConfig`<sup>Required</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```csharp
public ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference PredefinedQuestionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `QaQuestionDataOptions`<sup>Required</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference QaQuestionDataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaQuestionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `TuningMetadata`<sup>Required</sup> <a name="TuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```csharp
public ContactCenterInsightsQaQuestionTuningMetadataOutputReference TuningMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AbbreviationInput`<sup>Optional</sup> <a name="AbbreviationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```csharp
public string AbbreviationInput { get; }
```

- *Type:* string

---

##### `AnswerChoicesInput`<sup>Optional</sup> <a name="AnswerChoicesInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionAnswerChoices[] AnswerChoicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---

##### `AnswerInstructionsInput`<sup>Optional</sup> <a name="AnswerInstructionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```csharp
public string AnswerInstructionsInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput"></a>

```csharp
public ContactCenterInsightsQaQuestionMetrics MetricsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput"></a>

```csharp
public double OrderInput { get; }
```

- *Type:* double

---

##### `PredefinedQuestionConfigInput`<sup>Optional</sup> <a name="PredefinedQuestionConfigInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```csharp
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig PredefinedQuestionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QaQuestionDataOptionsInput`<sup>Optional</sup> <a name="QaQuestionDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptions QaQuestionDataOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```csharp
public string QaScorecardInput { get; }
```

- *Type:* string

---

##### `QuestionBodyInput`<sup>Optional</sup> <a name="QuestionBodyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```csharp
public string QuestionBodyInput { get; }
```

- *Type:* string

---

##### `QuestionTypeInput`<sup>Optional</sup> <a name="QuestionTypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```csharp
public string QuestionTypeInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput"></a>

```csharp
public string RevisionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `TuningMetadataInput`<sup>Optional</sup> <a name="TuningMetadataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```csharp
public ContactCenterInsightsQaQuestionTuningMetadata TuningMetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `Abbreviation`<sup>Required</sup> <a name="Abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation"></a>

```csharp
public string Abbreviation { get; }
```

- *Type:* string

---

##### `AnswerInstructions`<sup>Required</sup> <a name="AnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```csharp
public string AnswerInstructions { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order"></a>

```csharp
public double Order { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; }
```

- *Type:* string

---

##### `QuestionBody`<sup>Required</sup> <a name="QuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody"></a>

```csharp
public string QuestionBody { get; }
```

- *Type:* string

---

##### `QuestionType`<sup>Required</sup> <a name="QuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType"></a>

```csharp
public string QuestionType { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision"></a>

```csharp
public string Revision { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaQuestionAnswerChoices <a name="ContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionAnswerChoices {
    bool|IResolvable BoolValue = null,
    string Key = null,
    bool|IResolvable NaValue = null,
    double NumValue = null,
    double Score = null,
    string StrValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key">Key</a></code> | <code>string</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue">NaValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue">NumValue</a></code> | <code>double</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score">Score</a></code> | <code>double</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue">StrValue</a></code> | <code>string</code> | String value. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#bool_value ContactCenterInsightsQaQuestion#bool_value}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#key ContactCenterInsightsQaQuestion#key}

---

##### `NaValue`<sup>Optional</sup> <a name="NaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```csharp
public bool|IResolvable NaValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#na_value ContactCenterInsightsQaQuestion#na_value}

---

##### `NumValue`<sup>Optional</sup> <a name="NumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```csharp
public double NumValue { get; set; }
```

- *Type:* double

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#num_value ContactCenterInsightsQaQuestion#num_value}

---

##### `Score`<sup>Optional</sup> <a name="Score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```csharp
public double Score { get; set; }
```

- *Type:* double

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#score ContactCenterInsightsQaQuestion#score}

---

##### `StrValue`<sup>Optional</sup> <a name="StrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```csharp
public string StrValue { get; set; }
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#str_value ContactCenterInsightsQaQuestion#str_value}

---

### ContactCenterInsightsQaQuestionConfig <a name="ContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string QaScorecard,
    string Revision,
    string Abbreviation = null,
    IResolvable|ContactCenterInsightsQaQuestionAnswerChoices[] AnswerChoices = null,
    string AnswerInstructions = null,
    string DeletionPolicy = null,
    string Id = null,
    ContactCenterInsightsQaQuestionMetrics Metrics = null,
    double Order = null,
    ContactCenterInsightsQaQuestionPredefinedQuestionConfig PredefinedQuestionConfig = null,
    string Project = null,
    ContactCenterInsightsQaQuestionQaQuestionDataOptions QaQuestionDataOptions = null,
    string QuestionBody = null,
    string QuestionType = null,
    string[] Tags = null,
    ContactCenterInsightsQaQuestionTimeouts Timeouts = null,
    ContactCenterInsightsQaQuestionTuningMetadata TuningMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision">Revision</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation">Abbreviation</a></code> | <code>string</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices">AnswerChoices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions">AnswerInstructions</a></code> | <code>string</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order">Order</a></code> | <code>double</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">PredefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">QaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody">QuestionBody</a></code> | <code>string</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType">QuestionType</a></code> | <code>string</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags">Tags</a></code> | <code>string[]</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata">TuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision"></a>

```csharp
public string Revision { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}

---

##### `Abbreviation`<sup>Optional</sup> <a name="Abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```csharp
public string Abbreviation { get; set; }
```

- *Type:* string

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}

---

##### `AnswerChoices`<sup>Optional</sup> <a name="AnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionAnswerChoices[] AnswerChoices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}

---

##### `AnswerInstructions`<sup>Optional</sup> <a name="AnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```csharp
public string AnswerInstructions { get; set; }
```

- *Type:* string

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#deletion_policy ContactCenterInsightsQaQuestion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```csharp
public ContactCenterInsightsQaQuestionMetrics Metrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order"></a>

```csharp
public double Order { get; set; }
```

- *Type:* double

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}

---

##### `PredefinedQuestionConfig`<sup>Optional</sup> <a name="PredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```csharp
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig PredefinedQuestionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}.

---

##### `QaQuestionDataOptions`<sup>Optional</sup> <a name="QaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptions QaQuestionDataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `QuestionBody`<sup>Optional</sup> <a name="QuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```csharp
public string QuestionBody { get; set; }
```

- *Type:* string

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}

---

##### `QuestionType`<sup>Optional</sup> <a name="QuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```csharp
public string QuestionType { get; set; }
```

- *Type:* string

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```csharp
public ContactCenterInsightsQaQuestionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}

---

##### `TuningMetadata`<sup>Optional</sup> <a name="TuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```csharp
public ContactCenterInsightsQaQuestionTuningMetadata TuningMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}

---

### ContactCenterInsightsQaQuestionMetrics <a name="ContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionMetrics {

};
```


### ContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionPredefinedQuestionConfig {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">Type</a></code> | <code>string</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#type ContactCenterInsightsQaQuestion#type}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionQaQuestionDataOptions {
    ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions ConversationDataOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `ConversationDataOptions`<sup>Optional</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions ConversationDataOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#conversation_data_options ContactCenterInsightsQaQuestion#conversation_data_options}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions {
    bool|IResolvable IncludeDialogflowInteractionData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `IncludeDialogflowInteractionData`<sup>Optional</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```csharp
public bool|IResolvable IncludeDialogflowInteractionData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#include_dialogflow_interaction_data ContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### ContactCenterInsightsQaQuestionTimeouts <a name="ContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}.

---

### ContactCenterInsightsQaQuestionTuningMetadata <a name="ContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionTuningMetadata {
    string[] DatasetValidationWarnings = null,
    string TotalValidLabelCount = null,
    string TuningError = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>string[]</code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>string</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">TuningError</a></code> | <code>string</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `DatasetValidationWarnings`<sup>Optional</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```csharp
public string[] DatasetValidationWarnings { get; set; }
```

- *Type:* string[]

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#dataset_validation_warnings ContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `TotalValidLabelCount`<sup>Optional</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```csharp
public string TotalValidLabelCount { get; set; }
```

- *Type:* string

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#total_valid_label_count ContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `TuningError`<sup>Optional</sup> <a name="TuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```csharp
public string TuningError { get; set; }
```

- *Type:* string

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/contact_center_insights_qa_question#tuning_error ContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaQuestionAnswerChoicesList <a name="ContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionAnswerChoicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```csharp
private ContactCenterInsightsQaQuestionAnswerChoicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionAnswerChoices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---


### ContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="ContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionAnswerChoicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">ResetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">ResetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">ResetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">ResetStrValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```csharp
private void ResetBoolValue()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNaValue` <a name="ResetNaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```csharp
private void ResetNaValue()
```

##### `ResetNumValue` <a name="ResetNumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```csharp
private void ResetNumValue()
```

##### `ResetScore` <a name="ResetScore" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```csharp
private void ResetScore()
```

##### `ResetStrValue` <a name="ResetStrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```csharp
private void ResetStrValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">NaValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">NumValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">ScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">StrValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">NaValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">NumValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">StrValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```csharp
public bool|IResolvable BoolValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NaValueInput`<sup>Optional</sup> <a name="NaValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```csharp
public bool|IResolvable NaValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumValueInput`<sup>Optional</sup> <a name="NumValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```csharp
public double NumValueInput { get; }
```

- *Type:* double

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```csharp
public double ScoreInput { get; }
```

- *Type:* double

---

##### `StrValueInput`<sup>Optional</sup> <a name="StrValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```csharp
public string StrValueInput { get; }
```

- *Type:* string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `NaValue`<sup>Required</sup> <a name="NaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```csharp
public bool|IResolvable NaValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumValue`<sup>Required</sup> <a name="NumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```csharp
public double NumValue { get; }
```

- *Type:* double

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `StrValue`<sup>Required</sup> <a name="StrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```csharp
public string StrValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionAnswerChoices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>

---


### ContactCenterInsightsQaQuestionMetricsOutputReference <a name="ContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">Accuracy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accuracy`<sup>Required</sup> <a name="Accuracy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```csharp
public double Accuracy { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaQuestionMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---


### ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaQuestionPredefinedQuestionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">ResetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeDialogflowInteractionData` <a name="ResetIncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```csharp
private void ResetIncludeDialogflowInteractionData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">IncludeDialogflowInteractionDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">IncludeDialogflowInteractionData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="IncludeDialogflowInteractionDataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```csharp
public bool|IResolvable IncludeDialogflowInteractionDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeDialogflowInteractionData`<sup>Required</sup> <a name="IncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```csharp
public bool|IResolvable IncludeDialogflowInteractionData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">PutConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">ResetConversationDataOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConversationDataOptions` <a name="PutConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```csharp
private void PutConversationDataOptions(ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `ResetConversationDataOptions` <a name="ResetConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```csharp
private void ResetConversationDataOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">ConversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">ConversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationDataOptions`<sup>Required</sup> <a name="ConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference ConversationDataOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `ConversationDataOptionsInput`<sup>Optional</sup> <a name="ConversationDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions ConversationDataOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaQuestionQaQuestionDataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### ContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="ContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ContactCenterInsightsQaQuestionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---


### ContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="ContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ContactCenterInsightsQaQuestionTuningMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">ResetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">ResetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">ResetTuningError</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetValidationWarnings` <a name="ResetDatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```csharp
private void ResetDatasetValidationWarnings()
```

##### `ResetTotalValidLabelCount` <a name="ResetTotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```csharp
private void ResetTotalValidLabelCount()
```

##### `ResetTuningError` <a name="ResetTuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```csharp
private void ResetTuningError()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">DatasetValidationWarningsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">TotalValidLabelCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">TuningErrorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">DatasetValidationWarnings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">TotalValidLabelCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">TuningError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetValidationWarningsInput`<sup>Optional</sup> <a name="DatasetValidationWarningsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```csharp
public string[] DatasetValidationWarningsInput { get; }
```

- *Type:* string[]

---

##### `TotalValidLabelCountInput`<sup>Optional</sup> <a name="TotalValidLabelCountInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```csharp
public string TotalValidLabelCountInput { get; }
```

- *Type:* string

---

##### `TuningErrorInput`<sup>Optional</sup> <a name="TuningErrorInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```csharp
public string TuningErrorInput { get; }
```

- *Type:* string

---

##### `DatasetValidationWarnings`<sup>Required</sup> <a name="DatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```csharp
public string[] DatasetValidationWarnings { get; }
```

- *Type:* string[]

---

##### `TotalValidLabelCount`<sup>Required</sup> <a name="TotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```csharp
public string TotalValidLabelCount { get; }
```

- *Type:* string

---

##### `TuningError`<sup>Required</sup> <a name="TuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```csharp
public string TuningError { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```csharp
public ContactCenterInsightsQaQuestionTuningMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---




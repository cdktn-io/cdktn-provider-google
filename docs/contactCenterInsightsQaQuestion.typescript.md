# `contactCenterInsightsQaQuestion` Submodule <a name="`contactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google.contactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContactCenterInsightsQaQuestion <a name="ContactCenterInsightsQaQuestion" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion(scope: Construct, id: string, config: ContactCenterInsightsQaQuestionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig">ContactCenterInsightsQaQuestionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices">putAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">putPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions">putQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata">putTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation">resetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices">resetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions">resetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">resetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">resetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody">resetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType">resetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata">resetTuningMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnswerChoices` <a name="putAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```typescript
public putAnswerChoices(value: IResolvable | ContactCenterInsightsQaQuestionAnswerChoices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics"></a>

```typescript
public putMetrics(value: ContactCenterInsightsQaQuestionMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `putPredefinedQuestionConfig` <a name="putPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```typescript
public putPredefinedQuestionConfig(value: ContactCenterInsightsQaQuestionPredefinedQuestionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `putQaQuestionDataOptions` <a name="putQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```typescript
public putQaQuestionDataOptions(value: ContactCenterInsightsQaQuestionQaQuestionDataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts"></a>

```typescript
public putTimeouts(value: ContactCenterInsightsQaQuestionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `putTuningMetadata` <a name="putTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```typescript
public putTuningMetadata(value: ContactCenterInsightsQaQuestionTuningMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `resetAbbreviation` <a name="resetAbbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```typescript
public resetAbbreviation(): void
```

##### `resetAnswerChoices` <a name="resetAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```typescript
public resetAnswerChoices(): void
```

##### `resetAnswerInstructions` <a name="resetAnswerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```typescript
public resetAnswerInstructions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPredefinedQuestionConfig` <a name="resetPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```typescript
public resetPredefinedQuestionConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetQaQuestionDataOptions` <a name="resetQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```typescript
public resetQaQuestionDataOptions(): void
```

##### `resetQuestionBody` <a name="resetQuestionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```typescript
public resetQuestionBody(): void
```

##### `resetQuestionType` <a name="resetQuestionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetQuestionType"></a>

```typescript
public resetQuestionType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTuningMetadata` <a name="resetTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```typescript
public resetTuningMetadata(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContactCenterInsightsQaQuestion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices">answerChoices</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput">abbreviationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput">answerChoicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput">answerInstructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput">metricsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">predefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">qaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput">qaScorecardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput">questionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput">questionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput">tuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation">abbreviation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions">answerInstructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard">qaScorecard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody">questionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType">questionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `answerChoices`<sup>Required</sup> <a name="answerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoices"></a>

```typescript
public readonly answerChoices: ContactCenterInsightsQaQuestionAnswerChoicesList;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList">ContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metrics"></a>

```typescript
public readonly metrics: ContactCenterInsightsQaQuestionMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference">ContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `predefinedQuestionConfig`<sup>Required</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```typescript
public readonly predefinedQuestionConfig: ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `qaQuestionDataOptions`<sup>Required</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```typescript
public readonly qaQuestionDataOptions: ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsQaQuestionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference">ContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `tuningMetadata`<sup>Required</sup> <a name="tuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```typescript
public readonly tuningMetadata: ContactCenterInsightsQaQuestionTuningMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference">ContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `abbreviationInput`<sup>Optional</sup> <a name="abbreviationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```typescript
public readonly abbreviationInput: string;
```

- *Type:* string

---

##### `answerChoicesInput`<sup>Optional</sup> <a name="answerChoicesInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```typescript
public readonly answerChoicesInput: IResolvable | ContactCenterInsightsQaQuestionAnswerChoices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---

##### `answerInstructionsInput`<sup>Optional</sup> <a name="answerInstructionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```typescript
public readonly answerInstructionsInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.metricsInput"></a>

```typescript
public readonly metricsInput: ContactCenterInsightsQaQuestionMetrics;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `predefinedQuestionConfigInput`<sup>Optional</sup> <a name="predefinedQuestionConfigInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```typescript
public readonly predefinedQuestionConfigInput: ContactCenterInsightsQaQuestionPredefinedQuestionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `qaQuestionDataOptionsInput`<sup>Optional</sup> <a name="qaQuestionDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```typescript
public readonly qaQuestionDataOptionsInput: ContactCenterInsightsQaQuestionQaQuestionDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `qaScorecardInput`<sup>Optional</sup> <a name="qaScorecardInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```typescript
public readonly qaScorecardInput: string;
```

- *Type:* string

---

##### `questionBodyInput`<sup>Optional</sup> <a name="questionBodyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```typescript
public readonly questionBodyInput: string;
```

- *Type:* string

---

##### `questionTypeInput`<sup>Optional</sup> <a name="questionTypeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```typescript
public readonly questionTypeInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContactCenterInsightsQaQuestionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---

##### `tuningMetadataInput`<sup>Optional</sup> <a name="tuningMetadataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```typescript
public readonly tuningMetadataInput: ContactCenterInsightsQaQuestionTuningMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `abbreviation`<sup>Required</sup> <a name="abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.abbreviation"></a>

```typescript
public readonly abbreviation: string;
```

- *Type:* string

---

##### `answerInstructions`<sup>Required</sup> <a name="answerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```typescript
public readonly answerInstructions: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```typescript
public readonly qaScorecard: string;
```

- *Type:* string

---

##### `questionBody`<sup>Required</sup> <a name="questionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionBody"></a>

```typescript
public readonly questionBody: string;
```

- *Type:* string

---

##### `questionType`<sup>Required</sup> <a name="questionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.questionType"></a>

```typescript
public readonly questionType: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContactCenterInsightsQaQuestionAnswerChoices <a name="ContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionAnswerChoices: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key">key</a></code> | <code>string</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue">naValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue">numValue</a></code> | <code>number</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score">score</a></code> | <code>number</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue">strValue</a></code> | <code>string</code> | String value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#bool_value ContactCenterInsightsQaQuestion#bool_value}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#key ContactCenterInsightsQaQuestion#key}

---

##### `naValue`<sup>Optional</sup> <a name="naValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```typescript
public readonly naValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#na_value ContactCenterInsightsQaQuestion#na_value}

---

##### `numValue`<sup>Optional</sup> <a name="numValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```typescript
public readonly numValue: number;
```

- *Type:* number

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#num_value ContactCenterInsightsQaQuestion#num_value}

---

##### `score`<sup>Optional</sup> <a name="score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```typescript
public readonly score: number;
```

- *Type:* number

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#score ContactCenterInsightsQaQuestion#score}

---

##### `strValue`<sup>Optional</sup> <a name="strValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```typescript
public readonly strValue: string;
```

- *Type:* string

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#str_value ContactCenterInsightsQaQuestion#str_value}

---

### ContactCenterInsightsQaQuestionConfig <a name="ContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionConfig: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard">qaScorecard</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision">revision</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation">abbreviation</a></code> | <code>string</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices">answerChoices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions">answerInstructions</a></code> | <code>string</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order">order</a></code> | <code>number</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody">questionBody</a></code> | <code>string</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType">questionType</a></code> | <code>string</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags">tags</a></code> | <code>string[]</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#location ContactCenterInsightsQaQuestion#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```typescript
public readonly qaScorecard: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#qa_scorecard ContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#revision ContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```typescript
public readonly abbreviation: string;
```

- *Type:* string

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#abbreviation ContactCenterInsightsQaQuestion#abbreviation}

---

##### `answerChoices`<sup>Optional</sup> <a name="answerChoices" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```typescript
public readonly answerChoices: IResolvable | ContactCenterInsightsQaQuestionAnswerChoices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#answer_choices ContactCenterInsightsQaQuestion#answer_choices}

---

##### `answerInstructions`<sup>Optional</sup> <a name="answerInstructions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```typescript
public readonly answerInstructions: string;
```

- *Type:* string

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#answer_instructions ContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#deletion_policy ContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#id ContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```typescript
public readonly metrics: ContactCenterInsightsQaQuestionMetrics;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#metrics ContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#order ContactCenterInsightsQaQuestion#order}

---

##### `predefinedQuestionConfig`<sup>Optional</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```typescript
public readonly predefinedQuestionConfig: ContactCenterInsightsQaQuestionPredefinedQuestionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#predefined_question_config ContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#project ContactCenterInsightsQaQuestion#project}.

---

##### `qaQuestionDataOptions`<sup>Optional</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```typescript
public readonly qaQuestionDataOptions: ContactCenterInsightsQaQuestionQaQuestionDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#qa_question_data_options ContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `questionBody`<sup>Optional</sup> <a name="questionBody" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```typescript
public readonly questionBody: string;
```

- *Type:* string

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#question_body ContactCenterInsightsQaQuestion#question_body}

---

##### `questionType`<sup>Optional</sup> <a name="questionType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```typescript
public readonly questionType: string;
```

- *Type:* string

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#question_type ContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Questions are tagged for categorization and scoring.

Tags can either be:
- Default Tags: These are predefined categories. They are identified by
their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
- Custom Tags: These are user-defined categories. They are identified by
their full resource name (e.g.,
projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
Both default and custom tags are used to group questions and to influence
the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#tags ContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContactCenterInsightsQaQuestionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#timeouts ContactCenterInsightsQaQuestion#timeouts}

---

##### `tuningMetadata`<sup>Optional</sup> <a name="tuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```typescript
public readonly tuningMetadata: ContactCenterInsightsQaQuestionTuningMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#tuning_metadata ContactCenterInsightsQaQuestion#tuning_metadata}

---

### ContactCenterInsightsQaQuestionMetrics <a name="ContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionMetrics: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics = { ... }
```


### ContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionPredefinedQuestionConfig: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">type</a></code> | <code>string</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#type ContactCenterInsightsQaQuestion#type}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionQaQuestionDataOptions: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `conversationDataOptions`<sup>Optional</sup> <a name="conversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```typescript
public readonly conversationDataOptions: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#conversation_data_options ContactCenterInsightsQaQuestion#conversation_data_options}

---

### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `includeDialogflowInteractionData`<sup>Optional</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```typescript
public readonly includeDialogflowInteractionData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#include_dialogflow_interaction_data ContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### ContactCenterInsightsQaQuestionTimeouts <a name="ContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionTimeouts: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#create ContactCenterInsightsQaQuestion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#delete ContactCenterInsightsQaQuestion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#update ContactCenterInsightsQaQuestion#update}.

---

### ContactCenterInsightsQaQuestionTuningMetadata <a name="ContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

const contactCenterInsightsQaQuestionTuningMetadata: contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>string[]</code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>string</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">tuningError</a></code> | <code>string</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `datasetValidationWarnings`<sup>Optional</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```typescript
public readonly datasetValidationWarnings: string[];
```

- *Type:* string[]

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#dataset_validation_warnings ContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `totalValidLabelCount`<sup>Optional</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```typescript
public readonly totalValidLabelCount: string;
```

- *Type:* string

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#total_valid_label_count ContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `tuningError`<sup>Optional</sup> <a name="tuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```typescript
public readonly tuningError: string;
```

- *Type:* string

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/contact_center_insights_qa_question#tuning_error ContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### ContactCenterInsightsQaQuestionAnswerChoicesList <a name="ContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```typescript
public get(index: number): ContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsQaQuestionAnswerChoices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>[]

---


### ContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="ContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">resetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">resetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">resetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">resetStrValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetNaValue` <a name="resetNaValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```typescript
public resetNaValue(): void
```

##### `resetNumValue` <a name="resetNumValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```typescript
public resetNumValue(): void
```

##### `resetScore` <a name="resetScore" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```typescript
public resetScore(): void
```

##### `resetStrValue` <a name="resetStrValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```typescript
public resetStrValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">naValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">numValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">scoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">strValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">naValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">numValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">score</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">strValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `naValueInput`<sup>Optional</sup> <a name="naValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```typescript
public readonly naValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numValueInput`<sup>Optional</sup> <a name="numValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```typescript
public readonly numValueInput: number;
```

- *Type:* number

---

##### `scoreInput`<sup>Optional</sup> <a name="scoreInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```typescript
public readonly scoreInput: number;
```

- *Type:* number

---

##### `strValueInput`<sup>Optional</sup> <a name="strValueInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```typescript
public readonly strValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `naValue`<sup>Required</sup> <a name="naValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```typescript
public readonly naValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numValue`<sup>Required</sup> <a name="numValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```typescript
public readonly numValue: number;
```

- *Type:* number

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```typescript
public readonly score: number;
```

- *Type:* number

---

##### `strValue`<sup>Required</sup> <a name="strValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```typescript
public readonly strValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsQaQuestionAnswerChoices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionAnswerChoices">ContactCenterInsightsQaQuestionAnswerChoices</a>

---


### ContactCenterInsightsQaQuestionMetricsOutputReference <a name="ContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```typescript
public readonly accuracy: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsQaQuestionMetrics;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionMetrics">ContactCenterInsightsQaQuestionMetrics</a>

---


### ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsQaQuestionPredefinedQuestionConfig;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionPredefinedQuestionConfig">ContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">resetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeDialogflowInteractionData` <a name="resetIncludeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```typescript
public resetIncludeDialogflowInteractionData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">includeDialogflowInteractionDataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="includeDialogflowInteractionDataInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```typescript
public readonly includeDialogflowInteractionDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeDialogflowInteractionData`<sup>Required</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```typescript
public readonly includeDialogflowInteractionData: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">putConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">resetConversationDataOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConversationDataOptions` <a name="putConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```typescript
public putConversationDataOptions(value: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `resetConversationDataOptions` <a name="resetConversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```typescript
public resetConversationDataOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">conversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conversationDataOptions`<sup>Required</sup> <a name="conversationDataOptions" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```typescript
public readonly conversationDataOptions: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `conversationDataOptionsInput`<sup>Optional</sup> <a name="conversationDataOptionsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```typescript
public readonly conversationDataOptionsInput: ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsQaQuestionQaQuestionDataOptions;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionQaQuestionDataOptions">ContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### ContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="ContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContactCenterInsightsQaQuestionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTimeouts">ContactCenterInsightsQaQuestionTimeouts</a>

---


### ContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="ContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```typescript
import { contactCenterInsightsQaQuestion } from '@cdktn/provider-google'

new contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">resetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">resetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">resetTuningError</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetValidationWarnings` <a name="resetDatasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```typescript
public resetDatasetValidationWarnings(): void
```

##### `resetTotalValidLabelCount` <a name="resetTotalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```typescript
public resetTotalValidLabelCount(): void
```

##### `resetTuningError` <a name="resetTuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```typescript
public resetTuningError(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">datasetValidationWarningsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">totalValidLabelCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">tuningErrorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">tuningError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datasetValidationWarningsInput`<sup>Optional</sup> <a name="datasetValidationWarningsInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```typescript
public readonly datasetValidationWarningsInput: string[];
```

- *Type:* string[]

---

##### `totalValidLabelCountInput`<sup>Optional</sup> <a name="totalValidLabelCountInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```typescript
public readonly totalValidLabelCountInput: string;
```

- *Type:* string

---

##### `tuningErrorInput`<sup>Optional</sup> <a name="tuningErrorInput" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```typescript
public readonly tuningErrorInput: string;
```

- *Type:* string

---

##### `datasetValidationWarnings`<sup>Required</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```typescript
public readonly datasetValidationWarnings: string[];
```

- *Type:* string[]

---

##### `totalValidLabelCount`<sup>Required</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```typescript
public readonly totalValidLabelCount: string;
```

- *Type:* string

---

##### `tuningError`<sup>Required</sup> <a name="tuningError" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```typescript
public readonly tuningError: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContactCenterInsightsQaQuestionTuningMetadata;
```

- *Type:* <a href="#@cdktn/provider-google.contactCenterInsightsQaQuestion.ContactCenterInsightsQaQuestionTuningMetadata">ContactCenterInsightsQaQuestionTuningMetadata</a>

---




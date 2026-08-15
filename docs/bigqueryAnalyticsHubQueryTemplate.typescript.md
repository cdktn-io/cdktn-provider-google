# `bigqueryAnalyticsHubQueryTemplate` Submodule <a name="`bigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubQueryTemplate <a name="BigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

new bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate(scope: Construct, id: string, config: BigqueryAnalyticsHubQueryTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig">BigqueryAnalyticsHubQueryTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig">BigqueryAnalyticsHubQueryTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine">putRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine">resetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit">resetSubmit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutine` <a name="putRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```typescript
public putRoutine(value: BigqueryAnalyticsHubQueryTemplateRoutine): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```typescript
public putTimeouts(value: BigqueryAnalyticsHubQueryTemplateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```typescript
public resetDocumentation(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```typescript
public resetPrimaryContact(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```typescript
public resetRoutine(): void
```

##### `resetSubmit` <a name="resetSubmit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```typescript
public resetSubmit(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryAnalyticsHubQueryTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput">documentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">primaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">queryTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput">routineInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput">submitInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation">documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact">primaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">queryTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit">submit</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```typescript
public readonly routine: BigqueryAnalyticsHubQueryTemplateRoutineOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference">BigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```typescript
public readonly documentationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```typescript
public readonly primaryContactInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `queryTemplateIdInput`<sup>Optional</sup> <a name="queryTemplateIdInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```typescript
public readonly queryTemplateIdInput: string;
```

- *Type:* string

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```typescript
public readonly routineInput: BigqueryAnalyticsHubQueryTemplateRoutine;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `submitInput`<sup>Optional</sup> <a name="submitInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```typescript
public readonly submitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BigqueryAnalyticsHubQueryTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `queryTemplateId`<sup>Required</sup> <a name="queryTemplateId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```typescript
public readonly queryTemplateId: string;
```

- *Type:* string

---

##### `submit`<sup>Required</sup> <a name="submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```typescript
public readonly submit: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubQueryTemplateConfig <a name="BigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

const bigqueryAnalyticsHubQueryTemplateConfig: bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location">location</a></code> | <code>string</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">queryTemplateId</a></code> | <code>string</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description">description</a></code> | <code>string</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation">documentation</a></code> | <code>string</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">primaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit">submit</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#data_exchange_id BigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#display_name BigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#location BigqueryAnalyticsHubQueryTemplate#location}

---

##### `queryTemplateId`<sup>Required</sup> <a name="queryTemplateId" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```typescript
public readonly queryTemplateId: string;
```

- *Type:* string

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#query_template_id BigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#deletion_policy BigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#description BigqueryAnalyticsHubQueryTemplate#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* string

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#documentation BigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#id BigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```typescript
public readonly primaryContact: string;
```

- *Type:* string

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#primary_contact BigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#project BigqueryAnalyticsHubQueryTemplate#project}.

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```typescript
public readonly routine: BigqueryAnalyticsHubQueryTemplateRoutine;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#routine BigqueryAnalyticsHubQueryTemplate#routine}

---

##### `submit`<sup>Optional</sup> <a name="submit" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```typescript
public readonly submit: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#submit BigqueryAnalyticsHubQueryTemplate#submit}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BigqueryAnalyticsHubQueryTemplateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#timeouts BigqueryAnalyticsHubQueryTemplate#timeouts}

---

### BigqueryAnalyticsHubQueryTemplateRoutine <a name="BigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

const bigqueryAnalyticsHubQueryTemplateRoutine: bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">definitionBody</a></code> | <code>string</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">routineType</a></code> | <code>string</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `definitionBody`<sup>Optional</sup> <a name="definitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#definition_body BigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `routineType`<sup>Optional</sup> <a name="routineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#routine_type BigqueryAnalyticsHubQueryTemplate#routine_type}

---

### BigqueryAnalyticsHubQueryTemplateTimeouts <a name="BigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

const bigqueryAnalyticsHubQueryTemplateTimeouts: bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#create BigqueryAnalyticsHubQueryTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#delete BigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/bigquery_analytics_hub_query_template#update BigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="BigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

new bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">resetDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">resetRoutineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinitionBody` <a name="resetDefinitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```typescript
public resetDefinitionBody(): void
```

##### `resetRoutineType` <a name="resetRoutineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```typescript
public resetRoutineType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">definitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">routineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">definitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">routineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definitionBodyInput`<sup>Optional</sup> <a name="definitionBodyInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```typescript
public readonly definitionBodyInput: string;
```

- *Type:* string

---

##### `routineTypeInput`<sup>Optional</sup> <a name="routineTypeInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```typescript
public readonly routineTypeInput: string;
```

- *Type:* string

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```typescript
public readonly definitionBody: string;
```

- *Type:* string

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```typescript
public readonly routineType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryAnalyticsHubQueryTemplateRoutine;
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateRoutine">BigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```typescript
import { bigqueryAnalyticsHubQueryTemplate } from '@cdktn/provider-google'

new bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BigqueryAnalyticsHubQueryTemplateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryAnalyticsHubQueryTemplate.BigqueryAnalyticsHubQueryTemplateTimeouts">BigqueryAnalyticsHubQueryTemplateTimeouts</a>

---




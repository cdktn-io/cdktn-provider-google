# `loggingBillingAccountBucketConfig` Submodule <a name="`loggingBillingAccountBucketConfig` Submodule" id="@cdktn/provider-google.loggingBillingAccountBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountBucketConfig <a name="LoggingBillingAccountBucketConfig" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config google_logging_billing_account_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

new loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig(scope: Construct, id: string, config: LoggingBillingAccountBucketConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig">LoggingBillingAccountBucketConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig">LoggingBillingAccountBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings">putCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putIndexConfigs">putIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetCmekSettings">resetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetIndexConfigs">resetIndexConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCmekSettings` <a name="putCmekSettings" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings"></a>

```typescript
public putCmekSettings(value: LoggingBillingAccountBucketConfigCmekSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `putIndexConfigs` <a name="putIndexConfigs" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putIndexConfigs"></a>

```typescript
public putIndexConfigs(value: IResolvable | LoggingBillingAccountBucketConfigIndexConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]

---

##### `resetCmekSettings` <a name="resetCmekSettings" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetCmekSettings"></a>

```typescript
public resetCmekSettings(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexConfigs` <a name="resetIndexConfigs" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetIndexConfigs"></a>

```typescript
public resetIndexConfigs(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingBillingAccountBucketConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingBillingAccountBucketConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingBillingAccountBucketConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingBillingAccountBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingBillingAccountBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference">LoggingBillingAccountBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.indexConfigs">indexConfigs</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList">LoggingBillingAccountBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketIdInput">bucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettingsInput">cmekSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.indexConfigsInput">indexConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketId">bucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cmekSettings`<sup>Required</sup> <a name="cmekSettings" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingBillingAccountBucketConfigCmekSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference">LoggingBillingAccountBucketConfigCmekSettingsOutputReference</a>

---

##### `indexConfigs`<sup>Required</sup> <a name="indexConfigs" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: LoggingBillingAccountBucketConfigIndexConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList">LoggingBillingAccountBucketConfigIndexConfigsList</a>

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `bucketIdInput`<sup>Optional</sup> <a name="bucketIdInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketIdInput"></a>

```typescript
public readonly bucketIdInput: string;
```

- *Type:* string

---

##### `cmekSettingsInput`<sup>Optional</sup> <a name="cmekSettingsInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.cmekSettingsInput"></a>

```typescript
public readonly cmekSettingsInput: LoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexConfigsInput`<sup>Optional</sup> <a name="indexConfigsInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.indexConfigsInput"></a>

```typescript
public readonly indexConfigsInput: IResolvable | LoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountBucketConfigCmekSettings <a name="LoggingBillingAccountBucketConfigCmekSettings" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

const loggingBillingAccountBucketConfigCmekSettings: loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#kms_key_name LoggingBillingAccountBucketConfig#kms_key_name}

---

### LoggingBillingAccountBucketConfigConfig <a name="LoggingBillingAccountBucketConfigConfig" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

const loggingBillingAccountBucketConfigConfig: loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.bucketId">bucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.location">location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.cmekSettings">cmekSettings</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.description">description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#id LoggingBillingAccountBucketConfig#id}. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.indexConfigs">indexConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | index_configs block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#billing_account LoggingBillingAccountBucketConfig#billing_account}

---

##### `bucketId`<sup>Required</sup> <a name="bucketId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.bucketId"></a>

```typescript
public readonly bucketId: string;
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#bucket_id LoggingBillingAccountBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#location LoggingBillingAccountBucketConfig#location}

---

##### `cmekSettings`<sup>Optional</sup> <a name="cmekSettings" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.cmekSettings"></a>

```typescript
public readonly cmekSettings: LoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#cmek_settings LoggingBillingAccountBucketConfig#cmek_settings}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#deletion_policy LoggingBillingAccountBucketConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#description LoggingBillingAccountBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#id LoggingBillingAccountBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexConfigs`<sup>Optional</sup> <a name="indexConfigs" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.indexConfigs"></a>

```typescript
public readonly indexConfigs: IResolvable | LoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#index_configs LoggingBillingAccountBucketConfig#index_configs}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#retention_days LoggingBillingAccountBucketConfig#retention_days}

---

### LoggingBillingAccountBucketConfigIndexConfigs <a name="LoggingBillingAccountBucketConfigIndexConfigs" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

const loggingBillingAccountBucketConfigIndexConfigs: loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath">fieldPath</a></code> | <code>string</code> | The LogEntry field path to index. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs.property.type">type</a></code> | <code>string</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#field_path LoggingBillingAccountBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation]( https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/logging_billing_account_bucket_config#type LoggingBillingAccountBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingBillingAccountBucketConfigCmekSettingsOutputReference <a name="LoggingBillingAccountBucketConfigCmekSettingsOutputReference" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

new loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyVersionName`<sup>Required</sup> <a name="kmsKeyVersionName" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```typescript
public readonly kmsKeyVersionName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingBillingAccountBucketConfigCmekSettings;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigCmekSettings">LoggingBillingAccountBucketConfigCmekSettings</a>

---


### LoggingBillingAccountBucketConfigIndexConfigsList <a name="LoggingBillingAccountBucketConfigIndexConfigsList" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

new loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.get"></a>

```typescript
public get(index: number): LoggingBillingAccountBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingBillingAccountBucketConfigIndexConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>[]

---


### LoggingBillingAccountBucketConfigIndexConfigsOutputReference <a name="LoggingBillingAccountBucketConfigIndexConfigsOutputReference" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer"></a>

```typescript
import { loggingBillingAccountBucketConfig } from '@cdktn/provider-google'

new loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```typescript
public readonly fieldPathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingBillingAccountBucketConfigIndexConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountBucketConfig.LoggingBillingAccountBucketConfigIndexConfigs">LoggingBillingAccountBucketConfigIndexConfigs</a>

---




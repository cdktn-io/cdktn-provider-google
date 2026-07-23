# `loggingBillingAccountSink` Submodule <a name="`loggingBillingAccountSink` Submodule" id="@cdktn/provider-google.loggingBillingAccountSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountSink <a name="LoggingBillingAccountSink" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink google_logging_billing_account_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

new loggingBillingAccountSink.LoggingBillingAccountSink(scope: Construct, id: string, config: LoggingBillingAccountSinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig">LoggingBillingAccountSinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig">LoggingBillingAccountSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions">putBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetBigqueryOptions">resetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryOptions` <a name="putBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions"></a>

```typescript
public putBigqueryOptions(value: LoggingBillingAccountSinkBigqueryOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---

##### `putExclusions` <a name="putExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions"></a>

```typescript
public putExclusions(value: IResolvable | LoggingBillingAccountSinkExclusions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.putExclusions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---

##### `resetBigqueryOptions` <a name="resetBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetBigqueryOptions"></a>

```typescript
public resetBigqueryOptions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingBillingAccountSink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingBillingAccountSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingBillingAccountSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingBillingAccountSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingBillingAccountSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference">LoggingBillingAccountSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList">LoggingBillingAccountSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.writerIdentity">writerIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptionsInput">bigqueryOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusionsInput">exclusionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bigqueryOptions`<sup>Required</sup> <a name="bigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: LoggingBillingAccountSinkBigqueryOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference">LoggingBillingAccountSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusions"></a>

```typescript
public readonly exclusions: LoggingBillingAccountSinkExclusionsList;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList">LoggingBillingAccountSinkExclusionsList</a>

---

##### `writerIdentity`<sup>Required</sup> <a name="writerIdentity" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.writerIdentity"></a>

```typescript
public readonly writerIdentity: string;
```

- *Type:* string

---

##### `bigqueryOptionsInput`<sup>Optional</sup> <a name="bigqueryOptionsInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.bigqueryOptionsInput"></a>

```typescript
public readonly bigqueryOptionsInput: LoggingBillingAccountSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: IResolvable | LoggingBillingAccountSinkExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountSinkBigqueryOptions <a name="LoggingBillingAccountSinkBigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

const loggingBillingAccountSinkBigqueryOptions: loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#use_partitioned_tables LoggingBillingAccountSink#use_partitioned_tables}

---

### LoggingBillingAccountSinkConfig <a name="LoggingBillingAccountSinkConfig" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

const loggingBillingAccountSinkConfig: loggingBillingAccountSink.LoggingBillingAccountSinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | The billing account exported to the sink. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.destination">destination</a></code> | <code>string</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.name">name</a></code> | <code>string</code> | The name of the logging sink. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.description">description</a></code> | <code>string</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.exclusions">exclusions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | exclusions block. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#id LoggingBillingAccountSink#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

The billing account exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#billing_account LoggingBillingAccountSink#billing_account}

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#destination LoggingBillingAccountSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#name LoggingBillingAccountSink#name}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.bigqueryOptions"></a>

```typescript
public readonly bigqueryOptions: LoggingBillingAccountSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#bigquery_options LoggingBillingAccountSink#bigquery_options}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#deletion_policy LoggingBillingAccountSink#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#description LoggingBillingAccountSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#disabled LoggingBillingAccountSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.exclusions"></a>

```typescript
public readonly exclusions: IResolvable | LoggingBillingAccountSinkExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#exclusions LoggingBillingAccountSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#filter LoggingBillingAccountSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#id LoggingBillingAccountSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### LoggingBillingAccountSinkExclusions <a name="LoggingBillingAccountSinkExclusions" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

const loggingBillingAccountSinkExclusions: loggingBillingAccountSink.LoggingBillingAccountSinkExclusions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.filter">filter</a></code> | <code>string</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.name">name</a></code> | <code>string</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.description">description</a></code> | <code>string</code> | A description of this exclusion. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#filter LoggingBillingAccountSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#name LoggingBillingAccountSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#description LoggingBillingAccountSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/logging_billing_account_sink#disabled LoggingBillingAccountSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingBillingAccountSinkBigqueryOptionsOutputReference <a name="LoggingBillingAccountSinkBigqueryOptionsOutputReference" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

new loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">usePartitionedTablesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables">usePartitionedTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `usePartitionedTablesInput`<sup>Optional</sup> <a name="usePartitionedTablesInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```typescript
public readonly usePartitionedTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```typescript
public readonly usePartitionedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingBillingAccountSinkBigqueryOptions;
```

- *Type:* <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkBigqueryOptions">LoggingBillingAccountSinkBigqueryOptions</a>

---


### LoggingBillingAccountSinkExclusionsList <a name="LoggingBillingAccountSinkExclusionsList" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

new loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get"></a>

```typescript
public get(index: number): LoggingBillingAccountSinkExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingBillingAccountSinkExclusions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>[]

---


### LoggingBillingAccountSinkExclusionsOutputReference <a name="LoggingBillingAccountSinkExclusionsOutputReference" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer"></a>

```typescript
import { loggingBillingAccountSink } from '@cdktn/provider-google'

new loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingBillingAccountSinkExclusions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingBillingAccountSink.LoggingBillingAccountSinkExclusions">LoggingBillingAccountSinkExclusions</a>

---




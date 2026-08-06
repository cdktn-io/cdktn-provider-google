# `loggingSavedQuery` Submodule <a name="`loggingSavedQuery` Submodule" id="@cdktn/provider-google.loggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingSavedQuery <a name="LoggingSavedQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQuery(scope: Construct, id: string, config: LoggingSavedQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig">LoggingSavedQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig">LoggingSavedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery">putLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery">putOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery">resetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery">resetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingQuery` <a name="putLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery"></a>

```typescript
public putLoggingQuery(value: LoggingSavedQueryLoggingQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `putOpsAnalyticsQuery` <a name="putOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery"></a>

```typescript
public putOpsAnalyticsQuery(value: LoggingSavedQueryOpsAnalyticsQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts"></a>

```typescript
public putTimeouts(value: LoggingSavedQueryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingQuery` <a name="resetLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetLoggingQuery"></a>

```typescript
public resetLoggingQuery(): void
```

##### `resetOpsAnalyticsQuery` <a name="resetOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```typescript
public resetOpsAnalyticsQuery(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

loggingSavedQuery.LoggingSavedQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

loggingSavedQuery.LoggingSavedQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

loggingSavedQuery.LoggingSavedQuery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

loggingSavedQuery.LoggingSavedQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingSavedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput">loggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput">opsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `loggingQuery`<sup>Required</sup> <a name="loggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQuery"></a>

```typescript
public readonly loggingQuery: LoggingSavedQueryLoggingQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference">LoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `opsAnalyticsQuery`<sup>Required</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQuery"></a>

```typescript
public readonly opsAnalyticsQuery: LoggingSavedQueryOpsAnalyticsQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference">LoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingSavedQueryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference">LoggingSavedQueryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingQueryInput`<sup>Optional</sup> <a name="loggingQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.loggingQueryInput"></a>

```typescript
public readonly loggingQueryInput: LoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `opsAnalyticsQueryInput`<sup>Optional</sup> <a name="opsAnalyticsQueryInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```typescript
public readonly opsAnalyticsQueryInput: LoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoggingSavedQueryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingSavedQueryConfig <a name="LoggingSavedQueryConfig" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

const loggingSavedQueryConfig: loggingSavedQuery.LoggingSavedQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location">location</a></code> | <code>string</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name">name</a></code> | <code>string</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description">description</a></code> | <code>string</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#display_name LoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#location LoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#name LoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#parent LoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#visibility LoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#deletion_policy LoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#description LoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#id LoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.loggingQuery"></a>

```typescript
public readonly loggingQuery: LoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#logging_query LoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```typescript
public readonly opsAnalyticsQuery: LoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#ops_analytics_query LoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoggingSavedQueryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#timeouts LoggingSavedQuery#timeouts}

---

### LoggingSavedQueryLoggingQuery <a name="LoggingSavedQueryLoggingQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

const loggingSavedQueryLoggingQuery: loggingSavedQuery.LoggingSavedQueryLoggingQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>string</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>number</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields">summaryFields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart">summaryFieldStart</a></code> | <code>number</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#filter LoggingSavedQuery#filter}

---

##### `summaryFieldEnd`<sup>Optional</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```typescript
public readonly summaryFieldEnd: number;
```

- *Type:* number

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_end LoggingSavedQuery#summary_field_end}

---

##### `summaryFields`<sup>Optional</sup> <a name="summaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```typescript
public readonly summaryFields: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_fields LoggingSavedQuery#summary_fields}

---

##### `summaryFieldStart`<sup>Optional</sup> <a name="summaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```typescript
public readonly summaryFieldStart: number;
```

- *Type:* number

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#summary_field_start LoggingSavedQuery#summary_field_start}

---

### LoggingSavedQueryLoggingQuerySummaryFields <a name="LoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

const loggingSavedQueryLoggingQuerySummaryFields: loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>string</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#field LoggingSavedQuery#field}

---

### LoggingSavedQueryOpsAnalyticsQuery <a name="LoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

const loggingSavedQueryOpsAnalyticsQuery: loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sqlQueryText</a></code> | <code>string</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```typescript
public readonly sqlQueryText: string;
```

- *Type:* string

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#sql_query_text LoggingSavedQuery#sql_query_text}

---

### LoggingSavedQueryTimeouts <a name="LoggingSavedQueryTimeouts" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

const loggingSavedQueryTimeouts: loggingSavedQuery.LoggingSavedQueryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#create LoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#delete LoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/logging_saved_query#update LoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingSavedQueryLoggingQueryOutputReference <a name="LoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">putSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">resetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">resetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">resetSummaryFieldStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummaryFields` <a name="putSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```typescript
public putSummaryFields(value: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `resetSummaryFieldEnd` <a name="resetSummaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```typescript
public resetSummaryFieldEnd(): void
```

##### `resetSummaryFields` <a name="resetSummaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```typescript
public resetSummaryFields(): void
```

##### `resetSummaryFieldStart` <a name="resetSummaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```typescript
public resetSummaryFieldStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summaryFields</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summaryFieldEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summaryFieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summaryFieldStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summaryFieldStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `summaryFields`<sup>Required</sup> <a name="summaryFields" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```typescript
public readonly summaryFields: LoggingSavedQueryLoggingQuerySummaryFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList">LoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `summaryFieldEndInput`<sup>Optional</sup> <a name="summaryFieldEndInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```typescript
public readonly summaryFieldEndInput: number;
```

- *Type:* number

---

##### `summaryFieldsInput`<sup>Optional</sup> <a name="summaryFieldsInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```typescript
public readonly summaryFieldsInput: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `summaryFieldStartInput`<sup>Optional</sup> <a name="summaryFieldStartInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```typescript
public readonly summaryFieldStartInput: number;
```

- *Type:* number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `summaryFieldEnd`<sup>Required</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```typescript
public readonly summaryFieldEnd: number;
```

- *Type:* number

---

##### `summaryFieldStart`<sup>Required</sup> <a name="summaryFieldStart" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```typescript
public readonly summaryFieldStart: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingSavedQueryLoggingQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuery">LoggingSavedQueryLoggingQuery</a>

---


### LoggingSavedQueryLoggingQuerySummaryFieldsList <a name="LoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```typescript
public get(index: number): LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>[]

---


### LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```typescript
public resetField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingSavedQueryLoggingQuerySummaryFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryLoggingQuerySummaryFields">LoggingSavedQueryLoggingQuerySummaryFields</a>

---


### LoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="LoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sqlQueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sqlQueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sqlQueryTextInput`<sup>Optional</sup> <a name="sqlQueryTextInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```typescript
public readonly sqlQueryTextInput: string;
```

- *Type:* string

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```typescript
public readonly sqlQueryText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoggingSavedQueryOpsAnalyticsQuery;
```

- *Type:* <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryOpsAnalyticsQuery">LoggingSavedQueryOpsAnalyticsQuery</a>

---


### LoggingSavedQueryTimeoutsOutputReference <a name="LoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```typescript
import { loggingSavedQuery } from '@cdktn/provider-google'

new loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoggingSavedQueryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.loggingSavedQuery.LoggingSavedQueryTimeouts">LoggingSavedQueryTimeouts</a>

---




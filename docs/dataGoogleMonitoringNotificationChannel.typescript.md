# `dataGoogleMonitoringNotificationChannel` Submodule <a name="`dataGoogleMonitoringNotificationChannel` Submodule" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringNotificationChannel <a name="DataGoogleMonitoringNotificationChannel" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

new dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel(scope: Construct, id: string, config?: DataGoogleMonitoringNotificationChannelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig">DataGoogleMonitoringNotificationChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig">DataGoogleMonitoringNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels"></a>

```typescript
public resetUserLabels(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMonitoringNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete">forceDelete</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels">sensitiveLabels</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus">verificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput">userLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete"></a>

```typescript
public readonly forceDelete: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sensitiveLabels`<sup>Required</sup> <a name="sensitiveLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```typescript
public readonly sensitiveLabels: DataGoogleMonitoringNotificationChannelSensitiveLabelsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```typescript
public readonly verificationStatus: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```typescript
public readonly userLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringNotificationChannelConfig <a name="DataGoogleMonitoringNotificationChannelConfig" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.Initializer"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

const dataGoogleMonitoringNotificationChannelConfig: dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName">displayName</a></code> | <code>string</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type">type</a></code> | <code>string</code> | The type of the notification channel. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels">userLabels</a></code> | <code>{[ key: string ]: string}</code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```typescript
public readonly userLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

### DataGoogleMonitoringNotificationChannelSensitiveLabels <a name="DataGoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

const dataGoogleMonitoringNotificationChannelSensitiveLabels: dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringNotificationChannelSensitiveLabelsList <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsList" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

new dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get"></a>

```typescript
public get(index: number): DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```typescript
import { dataGoogleMonitoringNotificationChannel } from '@cdktn/provider-google'

new dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">authToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo">authTokenWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion">authTokenWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion">passwordWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">serviceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo">serviceKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion">serviceKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```typescript
public readonly authToken: string;
```

- *Type:* string

---

##### `authTokenWo`<sup>Required</sup> <a name="authTokenWo" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWo"></a>

```typescript
public readonly authTokenWo: string;
```

- *Type:* string

---

##### `authTokenWoVersion`<sup>Required</sup> <a name="authTokenWoVersion" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authTokenWoVersion"></a>

```typescript
public readonly authTokenWoVersion: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: string;
```

- *Type:* string

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```typescript
public readonly serviceKey: string;
```

- *Type:* string

---

##### `serviceKeyWo`<sup>Required</sup> <a name="serviceKeyWo" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWo"></a>

```typescript
public readonly serviceKeyWo: string;
```

- *Type:* string

---

##### `serviceKeyWoVersion`<sup>Required</sup> <a name="serviceKeyWoVersion" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKeyWoVersion"></a>

```typescript
public readonly serviceKeyWoVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleMonitoringNotificationChannelSensitiveLabels;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a>

---




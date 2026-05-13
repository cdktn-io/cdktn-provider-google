# `dataGoogleMonitoringAppEngineService` Submodule <a name="`dataGoogleMonitoringAppEngineService` Submodule" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringAppEngineService <a name="DataGoogleMonitoringAppEngineService" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service google_monitoring_app_engine_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

new dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService(scope: Construct, id: string, config: DataGoogleMonitoringAppEngineServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig">DataGoogleMonitoringAppEngineServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig">DataGoogleMonitoringAppEngineServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleMonitoringAppEngineService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleMonitoringAppEngineService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMonitoringAppEngineService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMonitoringAppEngineService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringAppEngineService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels">userLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput">moduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId">moduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.telemetry"></a>

```typescript
public readonly telemetry: DataGoogleMonitoringAppEngineServiceTelemetryList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList">DataGoogleMonitoringAppEngineServiceTelemetryList</a>

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.userLabels"></a>

```typescript
public readonly userLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `moduleIdInput`<sup>Optional</sup> <a name="moduleIdInput" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleIdInput"></a>

```typescript
public readonly moduleIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `moduleId`<sup>Required</sup> <a name="moduleId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.moduleId"></a>

```typescript
public readonly moduleId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringAppEngineServiceConfig <a name="DataGoogleMonitoringAppEngineServiceConfig" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.Initializer"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

const dataGoogleMonitoringAppEngineServiceConfig: dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId">moduleId</a></code> | <code>string</code> | The ID of the App Engine module underlying this service. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `moduleId`<sup>Required</sup> <a name="moduleId" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.moduleId"></a>

```typescript
public readonly moduleId: string;
```

- *Type:* string

The ID of the App Engine module underlying this service.

Corresponds to the 'moduleId' resource label for a 'gae_app'
monitored resource(see https://cloud.google.com/monitoring/api/resources#tag_gae_app)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#module_id DataGoogleMonitoringAppEngineService#module_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#id DataGoogleMonitoringAppEngineService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/monitoring_app_engine_service#project DataGoogleMonitoringAppEngineService#project}.

---

### DataGoogleMonitoringAppEngineServiceTelemetry <a name="DataGoogleMonitoringAppEngineServiceTelemetry" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry.Initializer"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

const dataGoogleMonitoringAppEngineServiceTelemetry: dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringAppEngineServiceTelemetryList <a name="DataGoogleMonitoringAppEngineServiceTelemetryList" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

new dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get"></a>

```typescript
public get(index: number): DataGoogleMonitoringAppEngineServiceTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleMonitoringAppEngineServiceTelemetryOutputReference <a name="DataGoogleMonitoringAppEngineServiceTelemetryOutputReference" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer"></a>

```typescript
import { dataGoogleMonitoringAppEngineService } from '@cdktn/provider-google'

new dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleMonitoringAppEngineServiceTelemetry;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleMonitoringAppEngineService.DataGoogleMonitoringAppEngineServiceTelemetry">DataGoogleMonitoringAppEngineServiceTelemetry</a>

---



